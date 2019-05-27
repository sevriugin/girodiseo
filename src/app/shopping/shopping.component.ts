import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Order, Item, Payment, ORDERSTATUS } from '../order';
import { PageEvent } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TagService } from '../tag.service';

const merchantID = 1743;

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {

  start: number;
  end: number;
  process: boolean;

  color = 'primary';
  mode = 'determinate';
  value = 50;

  new: boolean;
  userId: string;

  displayedColumns: string[] = ['position', 'name', 'price', 'qty', 'delete' ];

  order: Order;
  msg: string;

  tagid: string;
  ref: string;
  action: any;

  ordersubs: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private orderService: OrderService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private tagService: TagService
    ) { }

  ngOnInit() {
    this.start = 0;
    this.end = 10;
    this.process = false;
    this.new = false;
    this.msg = '';
    this.order = undefined;
    this.ordersubs = undefined;
    this.action = undefined;

    this.tagid = this.route.snapshot.queryParamMap.get('tagid');
    this.ref = this.route.snapshot.queryParamMap.get('ref');

    this.authService.getUser().subscribe((res) => {
      const userId = this.authService.getUID();
      this.ordersubs = this.orderService.getClientCurrentOrder(userId).subscribe((result) => {
        if (result.length > 0) {
          this.order = result[0];
          this.new = false;
          console.log('Loading current order...');
          console.log(this.order);
          this.addTagToOrder();
        } else {
          console.log('Adding new order...');
          this.new = true;
          this.msg = 'Select a product';
          this.userId = userId;
          this.addTagToOrder();
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.ordersubs) {
      this.ordersubs.unsubscribe();
    }
  }

  generate(): string {
    let tagid = Math.random();
    tagid = tagid * 1e14;
    tagid = Math.floor(tagid);
    return tagid.toString();
  }

  select(): void {
    if (!this.action) {
      return;
    }

    let type: string;
    let price: number;
    let priceTag: string;
    let img: string;
    const id = this.generate();

    if (this.action.bronze) {
      type = 'Bronze';
      price = 1000;
      priceTag = '₽ 1,000';
      img = '../assets/tag-bronze.svg';
    } else if (this.action.silver) {
      type = 'Silver';
      price = 6000;
      priceTag = '₽ 6,000';
      img = '../assets/tag-silver.svg';
    } else {
      type = 'Gold';
      price = 10000;
      priceTag = '₽ 10,000';
      img = '../assets/tag-gold.svg';
    }

    const item: Item = {
      id: id,
      code: `TAG-${type}-${id}`,
      name: `Giro d'Iseo ${type} Tag ${id}`,
      qty: 1,
      currency: 'RUB',
      priceTag,
      price,
      img
    };

    this.new = false;
    this.order = this.orderService.newOrderWithItems(this.userId, [item]);

  }

  addTagToOrder() {
    if (!this.tagid) {
      console.log('Nothing to add to the order. Tagid is undefined');
      return;
    }

    const item: Item = {
      id: this.tagid,
      code: `TAG${this.tagid}`,
      name: `Giro d'Iseo Tag ${this.tagid}`,
      qty: 1,
      currency: 'RUB',
      priceTag: `10,000 rub`,
      price: 10000,
      img: '../assets/tag.png'
    };

    if (this.new) {
      console.log(`Adding tag ${this.tagid} to new order`);
      this.new = false;
      this.order = this.orderService.newOrderWithItems(this.userId, [item]);
    } else {
      // check if tag is already in the order
      let index = -1;
      for (let i = 0; i < this.order.items.length; i++) {
        if (this.order.items[i].code === `TAG${this.tagid}`) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        console.log(`Adding tag ${this.tagid} to existing order`);
        // add tag to order
        this.order.items.push(item);
        this.orderService.updateOrder(this.order);
      } else {
        console.log(`TAG${this.tagid} is already in the order`);
      }
    }
  }

  getCurrentOrder(orders): Order | null {
    let order: Order = null;
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].status === ORDERSTATUS.NEW) {
        order = orders[i];
        break;
      }
    }
    return order;
  }

  gotoItem(id: string): void {
    if (this.new) {
      this.order = this.orderService.newOrder(this.userId);
    }
    if (this.order) {
      this.router.navigate([`/item/${id}/${this.order.ref}`]);
    } else {
      this.router.navigate([`/item/${id}`]);
    }
  }

  deleteItem(index: number): void {
    this.order.items.splice(index, 1);
    this.orderService.updateOrder(this.order);
    if (this.order.items && this.order.items.length === 0) {
      // empty orders deleted so make it undefined
      this.order = undefined;
    }
  }

  deleteOrder(): void {
    this.order.items = [];
    this.orderService.updateOrder(this.order);
    this.order = undefined;
  }

  authenticated(): boolean {
    return this.authService.authenticated();
  }

  gotoLogin(): void {
    this.router.navigate([`/login/shopping`]);
  }

  setPage(e: PageEvent): void {
    console.log(e);
    const { pageIndex, pageSize } = e;
    this.start = pageIndex * pageSize;
    this.end = this.start + pageSize;
  }

  shortName(name: string): string {
    if (name.length <= 20) {
      return `${name}`;
    } else {
      return `${name.slice(0, 17)}...`;
    }
  }

  getTotalCost(): number {
    let total = 0;
    for (let i = 0; i < this.order.items.length; i++) {
      total = total + this.order.items[i].price * this.order.items[i].qty;
    }
    return total;
  }

  getDescription(): string {
    let res = 'Items: ';
    for (let i = 0; i < this.order.items.length; i++) {
      if (res.length + this.order.items[i].name.length < 998) {
        if (i > 0) {
          res = res + ', ';
        }
        res = res + this.order.items[i].name;
      }
    }
    return res;
  }

  register(): void {
    this.process = true;
    this.value = 50; // progress spinner value
    this.ordersubs.unsubscribe();

    const url = `https://us-central1-cloud-firestore-test-d95bf.cloudfunctions.net/register`;
    const data = {
      sector: merchantID,
      amount: this.getTotalCost() * 100,
      currency: 643,
      reference: this.order.ref,
      description: this.getDescription(),
      url: 'https://girodiseo.ru/shopping/accept',
      failurl: 'https://girodiseo.ru/shopping/fail',
    };
    this.http.post(url, data, { responseType: 'text' }).subscribe((res: string) => {
      this.process = false;
      const parser = new DOMParser();
      const doc = parser.parseFromString(res, 'application/xml');
      console.log(doc);
      if (doc.getElementsByTagName('id').length > 0) {
        const id = doc.getElementsByTagName('id').item(0);
        const payment: Payment = { id: `${id.innerHTML}`, reference: this.order.ref, sector: merchantID.toString()};
        this.order.payment = payment;
        this.order.status = ORDERSTATUS.REG;
        this.orderService.updateOrder(this.order);
        if (this.tagid) {
          console.log(`Update tag for tagid ${this.tagid}`);
          this.tagService.setPayment(this.tagid, payment);
        } else {
          console.log('!No tag in the order!');
        }
        console.log(`Transaction ID ${id.innerHTML}`);
        this.authorize(parseInt(id.innerHTML, 10));
      }
      });
  }

  authorize(id: number): void {
    this.process = true;
    this.value = 80; // progress spinner value

    const url = 'https://us-central1-cloud-firestore-test-d95bf.cloudfunctions.net/authorize';
    const data = {
      sector: merchantID,
      id: id,
    };
    this.http.post(url, data, { responseType: 'text' }).subscribe((res: string) => {
      this.process = false;
      this.order.status = ORDERSTATUS.AUTH;
      this.orderService.updateOrder(this.order);
      console.log(res);
      window.location.assign(res);
      });
  }

}
