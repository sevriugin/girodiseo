import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  gotoBack(): void {
    this.location.back();
  }

}
