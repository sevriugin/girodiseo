import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  action: any;
  expert: string;   // mobile number
  shop: string;     // mobile number
  bike: string;     // mobile number
  mobile: string;   // admin mobile
  admin: boolean;   // true if mobile
  token: string;    // the Firebase Auth ID token JWT string.
  process: boolean;

  user_subs: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.action = undefined;
    this.expert = undefined;
    this.shop = undefined;
    this.bike = undefined;
    this.token = undefined;
    this.process = false;
    this.user_subs = this.authService.getUser().subscribe((user) => {
      if (user) {
        this.mobile = user.phoneNumber;
        user.getIdTokenResult()
          .then((idTokenResult) => {
            // Confirm the user is an Admin.
            if (!!idTokenResult.claims.admin) {
              this.admin = true;
              this.token = idTokenResult.token;
              console.log(`Admin account ${this.mobile}`);
            } else {
              this.admin = false;
              this.token = undefined;
            }
        })
        .catch((error) => {
          console.log(error);
        });
      } else {
        this.mobile = null;
        this.admin = false;
        this.token = undefined;
      }
    });
  }

  addExpert(): void {
    console.log('Add expert account');
    this.action = { expert: true };
  }

  addShop(): void {
    console.log('Add shop account');
    this.action = { shop: true };
  }

  addBikeShop(): void {
    console.log('Add bike shop account');
    this.action = { bike: true };
  }

  save(): void {
    if (!this.action) {
      return;
    }
    if (!this.token) {
      return;
    }
    if (!this.mobile) {
      return;
    }
    if (this.action.expert) {
      console.log('Save expert');
      this.claims(this.expert, 'expert');
      this.action = undefined;
    } else if (this.action.shop) {
      console.log('Save shop');
      this.claims(this.shop, 'shop');
      this.action = undefined;
    } else if (this.action.bike) {
      console.log('Save bike');
      this.claims(this.bike, 'bike');
      this.action = undefined;
    } else {
      console.error('Invalid action');
      this.action = undefined;
    }
  }

  claims(phone: string, claim: string): void {
    this.process = true;

    const url = 'https://us-central1-cloud-firestore-test-d95bf.cloudfunctions.net/claims';
    const data = { mobile: this.mobile, idToken: this.token, phone, claim };
    this.http.post(url, data, { responseType: 'json' }).subscribe((res: string) => {
      this.process = false;
      console.log(res);
      });
  }

}
