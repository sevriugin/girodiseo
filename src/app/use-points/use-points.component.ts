import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { Wallet } from '../wallet';
import { EthcontractService } from '../ethereum/ethcontract.service';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-use-points',
  templateUrl: './use-points.component.html',
  styleUrls: ['./use-points.component.css']
})
export class UsePointsComponent implements OnInit {
  account: string;
  dest: string;
  points: string;
  value: number;
  process: boolean;
  scanning: boolean;
  qr_code: string;
  invalid: boolean;

  @ViewChild('scanner') scanner: ZXingScannerComponent;

  constructor(
    private tagService: TagService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private contractService: EthcontractService,
    ) {}

  ngOnInit() {
    this.value = 0;
    this.dest = '';
    this.process = false;
    this.scanning = false;
    this.invalid = true;
    this.account = this.route.snapshot.paramMap.get('acc');
    this.points = this.route.snapshot.paramMap.get('points');
  }

  camerasFoundHandler(event) {
    this.scanner.scan(event[0].deviceId);
  }

  scanCompleteHandler(event) {
    this.scanning = false;
    console.log(event);
    if (event instanceof Result) {
      this.qr_code = event.getText();
      if (this.qr_code.startsWith('ethereum:')) {
        this.invalid = false;
        this.dest = this.qr_code.slice(9);
      } else {
        this.invalid = true;
        this.dest = 'Not Ethereum account';
      }
    } else {
      console.error('Scanner error');
    }
  }

  gotoBack(): void {
    this.location.back();
  }

  scan(): void {
    this.scanning = true;
  }

  close(): void {
    this.scanning = false;
  }

  confirm(): void {
    this.value = 1;
    this.process = true;
    this.contractService.transfer(this.dest);
    this.location.back();
  }
}
