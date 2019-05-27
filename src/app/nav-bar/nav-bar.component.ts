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
  admin: boolean;
  expert: boolean;
  bike: boolean;

  constructor(private authService: AuthService, private router: Router, private riderService: RiderService) { }

  ngOnInit() {
    this.admin = false;
    this.expert = false;
    this.bike = false;
    this.loginIcon = 'add_circle_outline';
    this.user_subs = this.authService.getUser().subscribe((user) => {
      if (user) {
        this.mobile = user.phoneNumber;
        this.getRider();
        user.getIdTokenResult()
          .then((idTokenResult) => {
            if (!!idTokenResult.claims.admin) {
              this.admin = true;
              this.loginIcon = 'star_border';
            } else if (!!idTokenResult.claims.expert) {
              console.log('Expert');
              this.expert = true;
              this.loginIcon = 'stars';
            } else if (!!idTokenResult.claims.bike) {
              console.log('Bike Shop');
              this.bike = true;
              this.loginIcon = 'radio_button_checked';
            } else {
              this.loginIcon = 'account_circle';
            }
        })
        .catch((error) => {
          console.log(error);
        });
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
      this.admin = false;
      this.loginIcon = 'add_circle_outline';
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

  gotoShopping(): void {
    this.router.navigate(['/shopping']);
  }

  gotoReg(): void {
    if (this.authenticated()) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/reg']);
    }
  }

  gotoHome(): void {
    if (this.admin) {
      this.router.navigate(['/admin']);
    } else if (this.expert) {
      this.router.navigate(['/expert']);
    } else if (this.bike) {
      this.router.navigate(['/bikeshop']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
