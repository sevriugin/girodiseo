import { Component, OnInit } from '@angular/core';
import { TokenLoyalty } from '../ethereum/token-loyalty';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  token: TokenLoyalty;

  constructor() {
  }

  ngOnInit() {
    console.log(`Landing loaded`);
    this.token = new TokenLoyalty();
  }

}
