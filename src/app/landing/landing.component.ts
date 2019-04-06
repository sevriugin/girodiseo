import { Component, OnInit, NgZone } from '@angular/core';
import { EthcontractService } from '../ethereum/ethcontract.service';
import { version } from '../../environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  version: string;


  constructor() {
  }

  ngOnInit() {
    this.version = version;
  }

}
