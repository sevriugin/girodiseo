import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../auth.service';

import { Subscription, Observable, timer } from 'rxjs';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-tnx-detail',
  templateUrl: './tnx-detail.component.html',
  styleUrls: ['./tnx-detail.component.css']
})
export class TnxDetailComponent implements OnInit {
  hash: string;
  transaction: Observable<Transaction[]>;
  tnx: Transaction;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private authService: AuthService,
    private tnxService: TransactionService
    ) {}

  ngOnInit() {
    this.hash = this.route.snapshot.paramMap.get('hash');
    this.transaction = this.tnxService.getTransaction(this.hash);
    this.transaction.subscribe((transactions) => this.tnx = transactions[0]);
  }


  gotoBack(): void {
    this.location.back();
  }

}
