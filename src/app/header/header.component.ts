import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() back: boolean;
  @Input() reload: boolean;
  @Input() title: string;
  @Input() parent: string;
  @Input() subtitle: string;
  constructor(private location: Location, private router: Router) { }

  ngOnInit() {

  }

  gotoBack(): void {
    this.location.back();
  }

  doReload(): void {
    this.router.navigateByUrl('/about', { skipLocationChange: true })
      .then(() => this.router.navigate([this.parent]))
      .catch(console.error);
  }


}
