import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sms-confirmation',
  templateUrl: './sms-confirmation.component.html',
  styleUrls: ['./sms-confirmation.component.css']
})
export class SmsConfirmationComponent implements OnInit {
  mobile: string;
  smscode: string;
  msg: string;
  progress: boolean;

  constructor(
    private zone: NgZone,
    private tagService: TagService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.clear();
    this.getMobile();
  }

  clear() {
    this.smscode = null;
    this.msg = null;
    this.progress = false;
  }

  getMobile(): void {
    this.mobile = this.route.snapshot.paramMap.get('mobile');
  }

  confirm(e: Event): void {
    this.progress = true;
    e.preventDefault();
    e.stopPropagation();
    this.authService.getConfirmation(this.smscode, (error, user) => {
      if (error) {
        this.msg = error;
        this.progress = false;
      } else {
        console.log(user);
        // registration is confirmed move to client profile
        this.zone.run(() => this.router.navigate([`/profile`]))
          .then(() => console.log('SmsConfirmationComponent: confirm: navigated to profile'))
          .catch((err) => console.error(err));
      }
    });
  }

}
