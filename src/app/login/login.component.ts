import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  recaptchaVerifier: any;
  mobile: string;
  msg: string;
  progress: boolean;

  constructor(
    private zone: NgZone,
    private tagService: TagService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  ngOnInit() {
    this.clear();
  }
  clear() {
    this.mobile = null;
    this.msg = null;
    this.progress = false;
  }
  login(e: Event) {
    this.progress = true;
    e.preventDefault();
    e.stopPropagation();
    this.authService.signInWithPhoneNumber(this.mobile, this.recaptchaVerifier, (error, confirmationResult) => {
      if (error) {
        // Login error
        console.error(`LoginComponent: login: ${error}`);
        this.msg = error;
        this.progress = false;
      } else {
        // I've got a confirmation object, lets go to the SMS confirmation screen
        // Need to use NgZone.run to go back to Angular zone exec env
        this.zone.run(() => this.router.navigate([`/smsconfirm/${this.mobile}`]))
          .then(() => console.log('LoginComponent: login: navigated to smsconfirm'))
          .catch((err) => console.error(err));
        console.log(`Has confirmation for ${this.mobile}`);
        console.log(confirmationResult);
      }
    });
  }

}
