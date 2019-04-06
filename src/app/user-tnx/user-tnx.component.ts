import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-user-tnx',
  templateUrl: './user-tnx.component.html',
  styleUrls: ['./user-tnx.component.css']
})
export class UserTnxComponent implements OnInit {
  @Input() transactions: Transaction[];
  start: number;
  end: number;

  displayedColumns: string[] = ['nonce', 'block', 'value', 'points', 'link'];

  constructor(private router: Router) { }

  ngOnInit() {
    this.start = 0;
    this.end = 10;
  }

  gotoTnx(hash: string): void {
    this.router.navigate([`/tnx/${hash}`]);
  }

  setPage(e: PageEvent): void {
    console.log(e);
    const { pageIndex, pageSize } = e;
    this.start = pageIndex * pageSize;
    this.end = this.start + pageSize;
  }

}
