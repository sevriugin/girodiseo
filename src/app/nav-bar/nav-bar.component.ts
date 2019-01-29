import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Rider } from '../rider';
import { RiderService } from '../rider.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  loginIcon: string;
  rider: Rider;
  nikname: string;
  rider_subs: Subscription;
  user_subs: Subscription;
  mobile: string;

  constructor(private authService: AuthService, private router: Router, private riderService: RiderService) { }

  ngOnInit() {
    this.user_subs = this.authService.getUser().subscribe((user) => {
      if (user) {
        this.mobile = user.phoneNumber;
        this.getRider();
      } else {
        this.mobile = null;
        this.nikname = null;
      }
    });
    if (this.authService.authenticated()) {
      this.loginIcon = 'account_circle';
    } else {
      this.mobile = null;
      this.nikname = null;
      this.loginIcon = 'add_circle_outline';
    }
  }

  ngOnDestroy() {
    if (this.rider_subs) { this.rider_subs.unsubscribe(); }
  }

  getRider(): void {
    this.rider_subs = this.riderService.getRiderByMobile(this.mobile)
    .subscribe(riders => {
      if (riders) {
        if (riders.length > 0) {
          console.log('navbar');
          console.log(riders[0]);
          this.rider = riders[0];
          this.nikname = this.rider.nikname;
        }
      }
     });
  }

  authenticated(): boolean {
    return this.authService.authenticated();
  }

  logout(): void {
    if (this.authenticated()) {
      this.authService.logout();
    } else {
      this.router.navigate(['/login']);
    }
  }

  gotoTags(): void {
    this.router.navigate(['/tags']);
  }

  gotoRide(): void {
    this.router.navigate(['/ride']);
  }

  gotoAbout(): void {
    this.router.navigate(['/about']);
  }

  gotoDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  gotoReg(): void {
    if (this.authenticated()) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/reg']);
    }
  }

  gotoHome(): void {
    this.router.navigate(['/']);
  }
}
