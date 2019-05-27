import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { Wallet } from '../wallet';

@Component({
  selector: 'app-tag-reg-sms',
  templateUrl: './tag-reg-sms.component.html',
  styleUrls: ['./tag-reg-sms.component.css'],
})
export class TagRegSmsComponent implements OnInit {
  tags: Tag[];
  smscode: string;
  msg: string;
  recaptchaVerifier: any;
  registered: boolean;
  progress: boolean;
  tagid: string;
  mobile: string;

  constructor(
    private tagService: TagService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
    ) {}

  ngOnInit() {
    this.getTag();
    this.clear();
  }
  clear() {
    this.smscode = null;
    this.msg = null;
    this.registered = false;
    this.progress = false;
  }

  getTag(): void {
    this.tagid = this.route.snapshot.paramMap.get('id');
    this.mobile = this.route.snapshot.paramMap.get('mobile');
    this.tagService.getTagById(this.tagid)
      .subscribe(tags => this.tags = tags);
  }

  gotoBack(): void {
    this.router.navigate([`/reg`]);
  }

  confirm(e: Event): void {
    this.progress = true;
    e.preventDefault();
    e.stopPropagation();

    const reg: Registration = {
      mobile: this.mobile,
      sms: '******'
    };

    this.authService.getConfirmation(this.smscode, (error, user) => {
      if (error) {
        this.msg = error;
        this.progress = false;
      } else {
        console.log(user);
        // registration is confirmed
        if (this.tags[0]) {
          console.log(`TagRegSmsComponent: confirm: seting reg date for ${this.tags[0].id}`);
          this.tagService.setRegDate(this.tags[0].id, (err, doc) => {
            if (err) {
              this.msg = err;
              this.progress = false;
              this.registered = false;
            } else {
              this.msg = `Tag registration date updated`;
              this.progress = false;
              this.registered = true;
              this.router.navigate([`/shoppingtag/${this.tagid}`]);
              // this.router.navigate([`/profile`]);
              // this.router.navigate([`/frame/${this.tagid}`]);
            }
          });
        } else {
          console.log(`TagRegSmsComponent: confirm: adding new tag with id ${this.tagid}`);
          this.tagService.setRegistration(this.tagid, null, reg);
          this.msg = `Tag is registered`;
          this.progress = false;
          this.registered = true;
          this.router.navigate([`/shoppingtag/${this.tagid}`]);
          // this.router.navigate([`/frame/${this.tagid}`]);
          // this.router.navigate([`/profile`]);
        }
      }
    });
  }
}
