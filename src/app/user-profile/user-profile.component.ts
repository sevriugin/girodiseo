import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { TrustedScriptString } from '@angular/core/src/sanitization/bypass';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { RiderService } from '../rider.service';
import { Rider, Bike } from '../rider';
import { Wallet } from '../wallet';
import { EthcontractService } from '../ethereum/ethcontract.service';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QrcodeDialogComponent } from '../qrcode-dialog/qrcode-dialog.component';
import { UserTagsComponent } from '../user-tags/user-tags.component';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [TagService]
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  tags: Tag[];
  rider: Rider;
  wallet: Wallet;
  balance: string;
  account: string;
  token: string;
  points: string;
  showqr: boolean;
  result: string;
  transactions: Observable<Transaction[]>;
  orders: Order[];

  constructor(
    private tagService: TagService,
    private authService: AuthService,
    private riderService: RiderService,
    private route: ActivatedRoute,
    private router: Router,
    private contractService: EthcontractService,
    private zone: NgZone,
    private tnxService: TransactionService,
    public dialog: MatDialog,
    private orderService: OrderService
    ) { }

  ngOnInit() {
    this.riderService.getRiderByMobile(this.authService.getUserPhone())
      .subscribe(riders => {
        if (riders) {
          if (riders.length > 0) {
            this.rider = riders[0];
            this.wallet = this.rider.wallet;
            if (this.rider.wallet) {
              this.account = this.rider.wallet.accounts[0];
              this.contractService.getAccountBalance(this.account)
                .subscribe((result) => this.zone.run(() => this.balance = `${+result / 1e18}`));
              this.getBalance().subscribe(results => {
                this.token = `${+results / 1e18}`;
              });
              this.transactions = this.tnxService.getAccountTransactions(this.account);
              this.transactions.subscribe((tnxs) => {
                this.contractService.getTokenBalance(this.account)
                  .subscribe((balance) => {
                    this.points = `${+balance}`;
                  });
              });
            }
          }
        }
       });

    this.authService.getUser().subscribe(user => {
      this.orderService.getClientOrders(user.uid).subscribe(orders => this.orders = orders);
    });
  }

  ngAfterViewInit() {
    this.getTags();
  }

  qrcode(): void {
    this.showqr = true;
    const dialogRef = this.dialog.open(QrcodeDialogComponent, {
      width: '250px',
      height: '300px',
      data: {account: this.account, result: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.result = result;
    });
  }

  getTags(): void {
    this.tagService.getTagsByMobile(this.phone())
        .subscribe(tags => this.tags = tags);
  }

  phone(): string | null {
    return this.authService.getUserPhone();
  }

  name(): string | null {
    return this.authService.getUserName();
  }

  authenticated(): boolean {
    return this.authService.authenticated();
  }

  logout(): void {
    this.authService.logout();
  }

  gotoUpdate(): void {
    this.router.navigate([`/update`]);
  }

  use(): void {
    this.router.navigate([`/use/${this.account}/${this.points}`]);
  }

  havePoints(): boolean {
    return +this.points > 0;
  }

  gotoTagById(tag: Tag): void {
    const tagId = tag ? tag.id : null;
    this.router.navigate([`/tag/${tagId}`]);
  }

  getAccount(): string | null {
    if (this.wallet) {
      return this.wallet.accounts[0];
    } else {
      return null;
    }
  }

  getAccountBalance(): Observable<string[] | null> {
    if (!this.wallet) {
      return of(null);
    } else {
      return this.contractService.getAccountBalance(this.wallet.accounts[0]);
    }
  }

  getBalance(): Observable<any[] | Error> {
    if (!this.wallet) {
      return of(null);
    } else {
      return this.contractService.getBalance();
    }
  }

  gotoTnx(hash: string): void {
    this.router.navigate([`/tnx/${hash}`]);
  }

}
