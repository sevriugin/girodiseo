import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { TrustedScriptString } from '@angular/core/src/sanitization/bypass';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { RiderService } from '../rider.service';
import { Rider, Bike } from '../rider';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [TagService]
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  tags: Tag[];
  rider: Rider;
  constructor(
    private tagService: TagService,
    private authService: AuthService,
    private riderService: RiderService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.riderService.getRiderByMobile(this.authService.getUserPhone())
      .subscribe(riders => {
        if (riders) {
          if (riders.length > 0) {
            this.rider = riders[0];
          }
        }
       });
  }

  ngAfterViewInit() {
    this.getTags();
  }

  getTags(): void {
    this.tagService.getTagsByMobile(this.phone())
        .subscribe(tags => this.tags = tags);
  }

  phone(): string | null {
    return this.authService.getUserPhone();
  }

  name(): string | null {
    return this.authService.getUserName();
  }

  authenticated(): boolean {
    return this.authService.authenticated();
  }

  logout(): void {
    this.authService.logout();
  }

  gotoUpdate(): void {
    this.router.navigate([`/update`]);
  }

  gotoTagById(tag: Tag): void {
    const tagId = tag ? tag.id : null;
    this.router.navigate([`/tag/${tagId}`]);
  }

}
