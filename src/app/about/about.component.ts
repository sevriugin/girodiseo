import { Component, OnInit } from '@angular/core';
import { version } from '../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  version: string;

  constructor() { }

  ngOnInit() {
    this.version = version;
  }

}
