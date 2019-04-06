import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Order, Item, ORDERSTATUS } from '../order';
import { PageEvent } from '@angular/material';
import { HttpClient } from '@angular/common/http';

const merchantID = 1743;

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

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

  constructor(private authService: AuthService, private router: Router, private orderService: OrderService, private http: HttpClient) { }

  ngOnInit() {
    this.start = 0;
    this.end = 10;
    this.process = false;
    this.new = false;
    this.msg = '';
    this.order = undefined;

    this.authService.getUser().subscribe((res) => {
      const userId = this.authService.getUID();
      this.orderService.getClientOrders(userId).subscribe((result) => {
        if (result.length > 0) {
          this.order = this.getCurrentOrder(result);
          if (this.order) {
            console.log('Loading current order...');
            console.log(this.order);
          } else {
            console.log('Did not find any order with new status');
            this.new = true;
            this.msg = 'Order is closed, add a new one';
            this.userId = userId;
          }
        } else {
          console.log('Adding new order...');
          // this.order = this.orderService.newOrder(userId);
          this.new = true;
          this.msg = 'Add new order';
          this.userId = userId;
        }
      });
    });
  }

  getCurrentOrder(orders): Order | null {
    let order: Order = null;
    for (let i = 1; i < orders.length; i++) {
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
      console.log(res);
      window.location.assign(res);
      });
  }

}
