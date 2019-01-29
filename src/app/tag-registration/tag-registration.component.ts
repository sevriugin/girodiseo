import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tag-registration',
  templateUrl: './tag-registration.component.html',
  styleUrls: ['./tag-registration.component.css'],
})
export class TagRegistrationComponent implements OnInit, AfterViewInit {
  tagid: string;
  mobile: string;
  msg: string;
  recaptchaVerifier: any;
  progress: boolean;

  constructor(
    private zone: NgZone,
    private tagService: TagService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
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
    this.tagid = null;
    this.mobile = null;
    this.msg = null;
    this.progress = false;
  }

  reg(e: Event) {
    this.progress = true;
    e.preventDefault();
    e.stopPropagation();
    this.authService.signInWithPhoneNumber(this.mobile, this.recaptchaVerifier, (error, confirmationResult) => {
      if (error) {
        console.error(`TagRegistrationComponent: reg: ${error}`);
        this.msg = error;
        this.progress = false;
      } else {
        // I've got a confirmation object, lets go to the SMS confirmation screen
        // Need to use NgZone.run to go back to Angular zone exec env
        this.zone.run(() => this.router.navigate([`/regsms/${this.tagid}/${this.mobile}`]))
          .then(() => console.log('TagRegistrationComponent: reg: navigated to regsms'))
          .catch((err) => console.error(err));
        console.log(`TagRegistrationComponent: reg: confirmation for ${this.mobile}`);
        console.log(confirmationResult);
      }
    });
  }

  gotoBack(): void {
    this.location.back();
  }

  generate(): void {
    let tagid = Math.random();
    tagid = tagid * 1e14;
    tagid = Math.floor(tagid);
    this.tagid = tagid.toString();
  }
}
