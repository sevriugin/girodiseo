import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { Order } from '../order';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  @Input() orders: Order[];
  start: number;
  end: number;

  displayedColumns: string[] = ['position', 'date', 'status', 'link'];

  constructor(private router: Router) { }

  ngOnInit() {
    this.start = 0;
    this.end = 10;
  }

  gotoOrder(ref: string): void {
    this.router.navigate([`/order/${ref}`]);
  }

  setPage(e: PageEvent): void {
    console.log(e);
    const { pageIndex, pageSize } = e;
    this.start = pageIndex * pageSize;
    this.end = this.start + pageSize;
  }

}
