import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProcessingError } from '../../environments/errors';
import { HttpClient } from '@angular/common/http';
import { Order, Item, ORDERSTATUS } from '../order';
import { OrderService } from '../order.service';

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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private http: HttpClient,
    private orderService: OrderService) { }

  ngOnInit() {

    this.process = false;

    this.result = this.route.snapshot.paramMap.get('result');
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.operation = this.route.snapshot.queryParamMap.get('operation');
    this.reference = this.route.snapshot.queryParamMap.get('reference');
    this.error = this.route.snapshot.queryParamMap.get('error');

    if (this.result === 'accept') {
      this.checkResult();
    }
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
          this.completeOrder();
        }
      }
      });
  }

  completeOrder(): void {
    if (this.reference && this.result === 'accept') {
      this.process = true;

      console.log(`Complete the Order ${this.reference}`);
      this.orderService.getOrderByRef(this.reference).subscribe((res) => {
        this.process = false;
        if (res.length > 0) {
          const order = res[0];
          // change order status
          order.status = ORDERSTATUS.CLOSED;
          // update order
          this.orderService.updateOrder(order);
        } else {
          console.error('Order is not found');
        }
      });
    }
  }

}
