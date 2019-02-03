import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { Wallet } from '../wallet';
import { EthcontractService } from '../ethereum/ethcontract.service';


@Component({
  selector: 'app-use-points',
  templateUrl: './use-points.component.html',
  styleUrls: ['./use-points.component.css']
})
export class UsePointsComponent implements OnInit {
  account: string;
  points: string;
  value: number;
  process: boolean;

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
    this.process = false;
    this.account = this.route.snapshot.paramMap.get('acc');
    this.points = this.route.snapshot.paramMap.get('points');
  }

  gotoBack(): void {
    this.location.back();
  }

  confirm(): void {
    this.value = 1;
    this.process = true;
    this.contractService.transfer('0xD601682a7584A7541C639899454D201Fe3270e9C');
    this.location.back();
  }
}
