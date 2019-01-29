import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import { Ride } from '../ride';
import { Rider, Bike } from '../rider';
import { RideService } from '../ride.service';
import { RiderService } from '../rider.service';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})
export class RideDetailComponent implements OnInit {

  ride: Ride;
  riders: Observable<Rider[]>;
  uid: string;
  progress: boolean;
  rider: Rider;
  id: string;

  constructor(
    private tagService: TagService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private rideService: RideService,
    private riderService: RiderService,
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.progress = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.rideService.getRideByIdCB(+id, (err, ride) => {
      if (err) {
        console.error(`RideDetailComponent: ngOnInit: ride not found ${id}`);
      } else {
        this.ride = ride;
        this.id = ride.rider.id;
        console.log(this.ride);
      }
    });
    this.authService.getUser().subscribe((user) => {
      this.uid = user.uid;
      console.log(this.uid);
      this.riders = this.riderService.getRiderById(this.uid);
    });
  }

  gotoBack(): void {
    this.location.back();
  }

  updateRiderInfo() {
    this.progress = true;
    this.riders.subscribe((riders) => {
      if (riders && riders.length > 0) {
        this.ride.rider = riders[0];
        this.rideService.updateRideByIdCB(this.ride, (err, ref) => {
          if (err) {
            this.progress = false;
            console.log(`RideDetailComponent: updateRiderInfo: ${err}`);
          } else {
            console.log(`RideDetailComponent: updateRiderInfo: rider info updated ${ref}`);
          }
        });
      } else {
        this.progress = false;
      }
    });
  }

  gotoTagById(id: string): void {
    this.router.navigate([`/tag/${id}`]);
  }

}
