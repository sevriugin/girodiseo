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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [RideParameters]
})
export class DashboardComponent implements OnInit, OnDestroy {
  rides: Ride[];
  start: number;
  end: number;

  sub: Subscription;

  displayedColumns: string[] = ['position', 'avatar', 'nikname',  'start', 'time', 'link'];

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
    this.start = 0;
    this.end = 10;
    this.getRides();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setPage(e: PageEvent): void {
    console.log(e);
    const { pageIndex, pageSize } = e;
    this.start = pageIndex * pageSize;
    this.end = this.start + pageSize;
  }

  update(): void {
    this.rideService.setOrder('time');
  }

  gotoBack(): void {
    this.location.back();
  }

  getRides(): void {
    this.sub = this.rideService.getRides()
      .subscribe(rides => this.rides = rides);
  }

  gotoRide(id: number): void {
    this.router.navigate([`/ride/${id}`]);
  }

}
