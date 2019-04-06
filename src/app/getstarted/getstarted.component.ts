import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { version } from '../../environments/environment';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {

  constructor(private location: Location) { }
  version: string;

  ngOnInit() {
    this.version = version;
  }

  gotoBack(): void {
    this.location.back();
  }

}
