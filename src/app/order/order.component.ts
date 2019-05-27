import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';
import { Order, Item, Payment, ORDERSTATUS } from '../order';
import { PageEvent } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  start: number;
  end: number;

  ref: string;
  order: Order;
  process: boolean;
  operations: any;

  paymentStatus: any;

  displayedColumns: string[] = ['position', 'name', 'price', 'qty' ];

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
    this.ref = this.route.snapshot.paramMap.get('ref');
    this.process = false;
    this.paymentStatus = undefined;
    this.orderService.getOrderByRef(this.ref).subscribe((res) => {
      if (res.length > 0) {
        this.order = res[0];
        console.log('Loading order');
        console.log(this.order);
      } else {
        console.error(`Order ${this.ref} is not found`);
      }
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

  checkOrder(): void {
    if (!this.order) {
      return;
    } else if (!this.order.payment) {
      return;
    }
    this.process = true;
    const payment = this.order.payment;

    const url = `https://us-central1-cloud-firestore-test-d95bf.cloudfunctions.net/order`;
    const data = {
      sector: payment.sector,
      id: payment.id,
      reference: payment.reference
    };
    this.http.post(url, data, { responseType: 'text' }).subscribe((res: string) => {
      this.process = false;

      const parser = new DOMParser();
      const doc = parser.parseFromString(res, 'application/xml');
      console.log(doc);
      if (doc.getElementsByTagName('order').length > 0) {
        this.operations = doc.getElementsByTagName('order').item(0);
        if (this.operations.getElementsByTagName('id').length > 0) {
          this.paymentStatus = { id: this.operations.getElementsByTagName('id').item(0).innerHTML };
        }
        if (this.operations.getElementsByTagName('state').length > 0) {
          this.paymentStatus.state = this.operations.getElementsByTagName('state').item(0).innerHTML;
        }
        if (this.operations.getElementsByTagName('inprogress').length > 0) {
          this.paymentStatus.inprogress = this.operations.getElementsByTagName('inprogress').item(0).innerHTML;
        }
        if (this.operations.getElementsByTagName('date').length > 0) {
          this.paymentStatus.date = this.operations.getElementsByTagName('date').item(0).innerHTML;
        }
        if (this.operations.getElementsByTagName('amount').length > 0) {
          this.paymentStatus.amount = this.operations.getElementsByTagName('amount').item(0).innerHTML;
        }
        if (this.operations.getElementsByTagName('currency').length > 0) {
          this.paymentStatus.currency = this.operations.getElementsByTagName('currency').item(0).innerHTML;
        }
        if (this.operations.getElementsByTagName('email').length > 0) {
          this.paymentStatus.email = this.operations.getElementsByTagName('email').item(0).innerHTML;
        }
        if (this.operations.getElementsByTagName('reference').length > 0) {
          this.paymentStatus.reference = this.operations.getElementsByTagName('reference').item(0).innerHTML;
        }
        if (this.operations.getElementsByTagName('description').length > 0) {
          this.paymentStatus.description = this.operations.getElementsByTagName('description').item(0).innerHTML;
        }
      }
    });
  }

  setPage(e: PageEvent): void {
    console.log(e);
    const { pageIndex, pageSize } = e;
    this.start = pageIndex * pageSize;
    this.end = this.start + pageSize;
  }
}
