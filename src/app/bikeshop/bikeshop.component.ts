import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Frame, Bike, Rider, brands } from '../rider';
import { TagService } from '../tag.service';
import { Tag } from '../tag';
import { OrderService } from '../order.service';
import { Order, Payment, ORDERSTATUS } from '../order';
import { ReturnStatement } from '@angular/compiler';
import { PageEvent } from '@angular/material';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-bikeshop',
  templateUrl: './bikeshop.component.html',
  styleUrls: ['./bikeshop.component.css']
})
export class BikeshopComponent implements OnInit {
  action: any;
  tagid: string;
  tag: Tag;
  msg: string;
  order: Order;
  mobile: string;
  tags: Tag[];
  start: number;
  end: number;

  displayedColumns: string[] = ['status', 'id', 'date', 'mobile', 'link'];

  constructor(
    private authService: AuthService,
    private tagService: TagService,
    private router: Router,
    private http: HttpClient,
    private location: Location,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.tag = undefined;
    this.tagid = undefined;
    this.action = undefined;
    this.msg = undefined;
    this.mobile = undefined;
    this.start = 0;
    this.end = 10;
  }

  startInspection() {
    if (!this.action) {
      return;
    }
    if (this.action.inspect) {
      console.log('Start inspection');
      if (this.tagid.startsWith('+')) {
        this.mobile = this.tagid;
        this.tagService.getTagsByMobile(this.mobile).subscribe(tags => {
          if (tags.length > 0 ) {
            this.action = {selection: true};
            this.tags = tags;
          } else {
            this.action = {inspect: true};
            this.msg = `Tag is not found`;
          }
        });
        return;
      }
      this.tagService.getTagById(this.tagid)
        .subscribe(tags => {
          if (tags.length > 0) {
            this.tag = tags[0];
            if (!this.tag.payment) {
              this.msg = 'TAG is not paid';
              console.log(`TAG ${this.tag.id} is not paid`);
              return;
            }
            const payment = this.tag.payment;
            this.orderService.getOrderByRef(payment.reference).subscribe(orders => {
              if (orders.length > 0) {
                this.order = orders[0];
                if (this.order.status === ORDERSTATUS.PAID || this.order.status === ORDERSTATUS.CLOSED ) {
                  console.log(`Tag status is paid, start bike inspection`);
                  if (this.tag.bike) {
                    // bike inspection is done already
                    this.msg = `Bike is inspected already`;
                    return;
                  }
                  this.msg = undefined;
                  this.router.navigate([`/frame/${tags[0].id}`]);
                } else {
                  this.msg = `Wrong status ${this.order.status}`;
                  return;
                }
              } else {
                console.error(`The order for reference ${payment.reference} id not found`);
              }
            });
          } else {
            this.tag = undefined;
            this.msg = 'Tag not found';
            console.error('Tag not found');
          }
      });
    } else if (this.action.claim) {
      console.log('Start claim process');
      this.tagService.getTagById(this.tagid)
        .subscribe(tags => {
          if (tags.length > 0) {
            this.tag = tags[0];
            this.msg = 'Process not defined';
            // start claim process
          } else {
            this.tag = undefined;
            this.msg = 'Tag not found';
            console.error('Tag not found');
          }
      });
    } else {
      console.error('Invalid action');
    }
  }

  status(tag: Tag): string {
    if (tag.payment && tag.bike) {
      return 'bike';
    } else if (tag.bike && !tag.payment) {
      return 'error';
    } else if (!tag.bike && tag.payment) {
      return 'payment';
    } else {
      return 'test';
    }
  }

  setPage(e: PageEvent): void {
    console.log(e);
    const { pageIndex, pageSize } = e;
    this.start = pageIndex * pageSize;
    this.end = this.start + pageSize;
  }


  showMobile(mobile: string): string {
    const start = mobile.length - 7;
    if (start < 0) {
      return mobile;
    } else {
      return `${mobile.slice(start, start + 3)}-${mobile.slice(start + 3, start + 5)}-${mobile.slice(start + 5)}`;
    }
  }

  showTagId(id: string): string {
    const start = id.length - 4;
    if (id.length > 7) {
      return `${id.slice(0, 3)}...${id.slice(start)}`;
    } else {
      return id;
    }
  }

  gotoTagById(tag: Tag): void {
    this.action = { inspect: true };
    this.tagid = tag.id;
    this.mobile = undefined;
    this.msg = undefined;
  }

}
