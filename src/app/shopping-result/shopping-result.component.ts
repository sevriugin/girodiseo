import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProcessingError } from '../../environments/errors';
import { HttpClient } from '@angular/common/http';
import { Order, Item, ORDERSTATUS } from '../order';
import { OrderService } from '../order.service';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import { AuthService } from '../auth.service';
import { DatePipe } from '@angular/common';
import { PageEvent } from '@angular/material';


const merchantID = 1093;

@Component({
  selector: 'app-shopping-result',
  templateUrl: './shopping-result.component.html',
  styleUrls: ['./shopping-result.component.css']
})
export class ShoppingResultComponent implements OnInit {
  result: string;
  id: string;
  operation: string;
  reference: string;
  error: string;
  code: string;
  process: boolean;
  mobile: string;
  uid: string;
  order: Order;

  start: number;
  end: number;
  updated: boolean;

  displayedColumns: string[] = ['position', 'name', 'price', 'qty' ];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private http: HttpClient,
    private orderService: OrderService,
    private tagService: TagService,
    private authService: AuthService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.start = 0;
    this.end = 10;

    this.process = false;
    this.updated = false;

    this.result = this.route.snapshot.paramMap.get('result');
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.operation = this.route.snapshot.queryParamMap.get('operation');
    this.reference = this.route.snapshot.queryParamMap.get('reference');
    this.error = this.route.snapshot.queryParamMap.get('error');

    if (this.result === 'accept') {
      this.checkResult();
    } else {
      this.completeOrder(ORDERSTATUS.FAILED);
    }
    this.authService.getUser().subscribe(user => {
      this.mobile = user.phoneNumber;
      this.uid = user.uid;
    });
  }

  shortName(name: string): string {
    if (name.length <= 20) {
      return `${name}`;
    } else {
      return `${name.slice(0, 17)}...`;
    }
  }

  gotoItem(id: string): void {
    if (this.order) {
      this.router.navigate([`/item/${id}/${this.order.ref}/locked`]);
    }
  }

  setPage(e: PageEvent): void {
    console.log(e);
    const { pageIndex, pageSize } = e;
    this.start = pageIndex * pageSize;
    this.end = this.start + pageSize;
  }

  getErrorMessage(): string {
    let msg = '';
    if (this.error) {
      if (ProcessingError[this.error]) {
        msg = ProcessingError[this.error];
      }
    }
    return msg;
  }

  gotoShopping() {
    this.router.navigate([`/shopping`]);
  }

  checkResult(): void {
    this.process = true;

    const url = `https://us-central1-cloud-firestore-test-d95bf.cloudfunctions.net/operation`;
    const data = {
      sector: merchantID,
      id: this.id,
      reference: this.reference,
      operation: this.operation
    };
    this.http.post(url, data, { responseType: 'text' }).subscribe((res: string) => {
      this.process = false;

      const parser = new DOMParser();
      const doc = parser.parseFromString(res, 'application/xml');
      console.log(doc);
      if (doc.getElementsByTagName('approval_code').length > 0) {
        this.code = doc.getElementsByTagName('approval_code').item(0).innerHTML;
        console.log(`Approval code ${this.code}`);
      }
      if (doc.getElementsByTagName('order_state').length > 0) {
        const state = doc.getElementsByTagName('order_state').item(0);
        console.log(`Order State ${state.innerHTML}`);
        if (state.innerHTML === 'COMPLETED') {
          this.completeOrder(ORDERSTATUS.CLOSED);
        }
      } else {
        this.completeOrder(ORDERSTATUS.PAID);
      }
      });
  }

  completeOrder(status: string): void {
    if (this.reference) {
      this.process = true;

      console.log(`Complete the Order ${this.reference}`);
      this.orderService.getOrderByRef(this.reference).subscribe((res) => {
        this.process = false;
        if (this.updated) {
          return;
        }
        if (res.length > 0) {
          const order = res[0];
          this.order = res[0];
          // change order status
          order.status = status;
          this.updated = true;
          // update order
          this.orderService.updateOrderCB(order, (err, result) => {
            if (err) {
              console.error(err);
            } else {
              console.log(`Order Status ${order.status} is changing for client ${order.client} by user ${this.uid}`);
              if (status === ORDERSTATUS.PAID && order.client === this.uid) {
                console.log('Check if order has TAG');
                for (let i = 0; i < order.items.length; i++) {
                  if (order.items[i].code.startsWith('TAG')) {
                    // adding tag to user
                    console.log(`Add tag ${order.items[i].id} to client ${order.client}`);
                    const regDate = this.datePipe.transform(new Date(), 'dd-MM-yy');
                    const reg: Registration = {
                      mobile: this.mobile,
                      sms: 'auto reg / paid'
                    };
                    const tag: Tag = {
                      id: order.items[i].id,
                      regDate,
                      reg,
                      payment: order.payment
                    };
                    this.tagService.addNewTag(tag);
                  }
                }
              }
            }
          });
        } else {
          console.error('Order is not found');
        }
      });
    }
  }

}
