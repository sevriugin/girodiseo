import { Component, OnInit, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { TagService } from '../tag.service';
import { AuthService } from '../auth.service';
import { RiderService } from '../rider.service';
import { RideService } from '../ride.service';
import { Rider, Bike} from '../rider';
import { Ride } from '../ride';
import { Tag } from '../tag';
import { PageEvent } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Subscription, Observable, timer } from 'rxjs';
import { Parameters, RideParameters } from '../parameters';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css'],
  providers: [RideParameters]
})
export class RideComponent implements OnInit, OnDestroy {
  rider: Rider;
  rides: Ride[];
  ride: Ride;
  tags: Tag[];
  tagid: string;
  start: number;
  end: number;
  progress: boolean;
  timestemp: number;
  hours: number;
  minutes: number;
  seconds: number;
  ref: string;
  nikname: string;
  avatar: string;

  displayedColumns: string[] = ['date', 'start', 'finish', 'time', 'link'];

  private timer: Observable<number>;
  private timer_subs: Subscription;
  private rides_subs: Subscription;
  private ride_subs: Subscription;
  private tags_subs: Subscription;
  private rider_subs: Subscription;

  constructor(
    private zone: NgZone,
    private tagService: TagService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private riderService: RiderService,
    private rideService: RideService,
    private datePipe: DatePipe,
    private location: Location,
    private param: RideParameters
    ) { console.log(this.param); }

  ngOnInit() {
    this.clear();
    this.getTags();
    this.getRider();
  }
  ngOnDestroy() {
    if (this.tags_subs) { this.tags_subs.unsubscribe(); }
    if (this.rides_subs) { this.rides_subs.unsubscribe(); }
    if (this.ride_subs) { this.ride_subs.unsubscribe(); }
    if (this.timer_subs) { this.timer_subs.unsubscribe(); }
    if (this.rider_subs) { this.rider_subs.unsubscribe(); }
  }

  clear() {
    this.tagid = null;
    this.start = 0;
    this.end = 10;
    this.progress = false;
  }

  gotoRide(id: number): void {
    this.router.navigate([`/ride/${id}`]);
  }

  getTags(): void {
    this.tags_subs = this.tagService.getTagsByMobile(this.authService.getUserPhone())
      .subscribe(tags => this.tags = tags);
  }

  getRider(): void {
    this.rider_subs = this.riderService.getRiderByMobile(this.authService.getUserPhone())
    .subscribe(riders => {
      if (riders) {
        if (riders.length > 0) {
          this.rider = riders[0];
          this.nikname = this.rider.nikname;
          this.avatar = this.rider.avatar;
        }
      }
     });
  }

  getRides(): void {
    this.rides_subs = this.rideService.getRidesByTagId(this.tagid)
      .subscribe(rides => this.rides = rides);
  }

  getRide(): void {
    this.ride_subs = this.rideService.getRideByTagId(this.tagid)
      .subscribe(rides => {
        if (rides.length > 0) {
          this.ride = rides[0];
          this.timer = timer(0, 1000);
          this.timer_subs = this.timer.subscribe(t => {
            this.timestemp = new Date().getTime() - this.ride.start;
            this.hours = Math.floor(this.timestemp / 1000 / 60 / 60);
            this.minutes = Math.floor(this.timestemp / 1000 / 60 );
            this.seconds = Math.floor(this.timestemp / 1000 );
          });
        }
      });
  }

  select(tagid: string) {
    this.tagid = tagid;
    this.getRides();
    this.getRide();
  }

  setPage(e: PageEvent): void {
    console.log(e);
    const { pageIndex, pageSize } = e;
    this.start = pageIndex * pageSize;
    this.end = this.start + pageSize;
  }

  startRide(e: Event): void {
    if (!this.tagid) {
      return;
    }
    this.progress = true;
    e.preventDefault();
    e.stopPropagation();
    const start = new Date().getTime();
    const tagid = this.tagid;
    const id = Math.random() * 1000 + start;
    const open = true;
    const rider = this.rider;
    let ride: Ride;
    if (rider) {
      ride = { id, tagid, start, open, rider };
    } else {
      ride = { id, tagid, start, open };
    }
    this.rideService.addNewRideCB(ride, (err, ref) => {
      if (err) {
        this.progress = false;
        console.error(err);
      } else {
        this.progress = false;
        this.getRides();
      }
    });
  }

  finishRide(e: Event): void {
    this.progress = true;
    e.preventDefault();
    e.stopPropagation();
    const finish = new Date().getTime();
    this.ride.finish = finish;
    this.ride.open = false;
    const time = finish - this.ride.start;
    if (time > this.param.mintime && time < this.param.maxtime) {
      this.ride.time = time;
      console.log(`RideComponent: finishRide: record ride time: ${time}`);
    } else {
      this.ride.time = 0;
      console.log(`RideComponent: finishRide: ride time: ${time} is out of range [${this.param.mintime}, ${this.param.maxtime}]`);
    }
    this.rideService.updateRideByIdCB(this.ride, (err, ref) => {
      if (err) {
        this.progress = false;
        console.error(err);
      } else {
        this.progress = false;
        this.getRides();
      }
    });
  }

  gotoBack(): void {
    this.location.back();
  }

}
