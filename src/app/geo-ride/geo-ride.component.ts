import { Component, OnInit, OnDestroy, AfterViewInit, NgZone, ViewChild, Input } from '@angular/core';
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
import { RideParameters } from '../parameters';
import { AgmMarker, AgmLocation, EnterExitPoint, CheckPoint, Giro, Traceroute } from '../googlemap';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

declare var google: any;

@Component({
  selector: 'app-geo-ride',
  templateUrl: './geo-ride.component.html',
  styleUrls: ['./geo-ride.component.css'],
  providers: [RideParameters]
})

export class GeoRideComponent implements OnInit, OnDestroy {

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
  geomsg: string;

  displayedColumns: string[] = ['date', 'start', 'finish', 'time', 'link'];

  startLoc: AgmLocation = {
    lat: 45.6707502641053,
    lng: 9.955278242626946,
    zoom: 15,
    marker: { lat: 45.6707502641053, lng: 9.955278242626946, label: 'S', draggable: false }
  };

  eePointLocA: AgmLocation = {
    lat: 45.671042650321844,
    lng: 9.954087341824334,
    zoom: 15,
    marker: { lat: 45.671042650321844, lng: 9.954087341824334, label: 'A', draggable: false }
  };

  eePointLocB: AgmLocation = {
    lat: 45.670742767002764,
    lng: 9.956576431790154,
    zoom: 15,
    marker: { lat: 45.670742767002764, lng: 9.956576431790154, label: 'B', draggable: false }
  };

  eePointLocC: AgmLocation = {
    lat: 45.66985810185053,
    lng: 9.955288971463006,
    zoom: 15,
    marker: { lat: 45.66985810185053, lng: 9.955288971463006, label: 'C', draggable: false }
  };

  checkPoint: CheckPoint = {
    id: 0,
    loc: this.startLoc,
    type: 'start/finish',
    scope: 500,
    radius: 100,
    eep: [
      { loc: this.eePointLocA, next: 0, slow: true },
      { loc: this.eePointLocB, next: 0, slow: false },
      { loc: this.eePointLocC, next: 0, slow: false },
    ]
  };

  girodiseo: Giro = {
    id: 0,
    name: 'Giro d\'Iseo',
    desc: 'Giro d\'Iseo ride',
    length: 62,
    points: [this.checkPoint]
  };

  options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };


  geocoder: any;
  lat: number;
  lng: number;
  loc: AgmLocation;
  zoom = 15;
  radius = 100;
  trace: Traceroute;
  geolastupdate: number;
  geolock: boolean;
  geoupdatecount: number;
  geoerrorcount: number;
  geoclearcount: number;
  geoid: number;
  geotimer: number;

  @ViewChild(AgmMap) map: AgmMap;

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
    private param: RideParameters,
    public mapsApiLoader: MapsAPILoader,
    private wrapper: GoogleMapsAPIWrapper
    ) {
      console.log(this.param);
      this.mapsApiLoader.load().then(() => {
        this.geocoder = new google.maps.Geocoder();
      });
    }

  ngOnInit() {
    this.clear();
    this.getTags();
    this.getRider();
    this.getLocation();
    this.setGeoWatch();
  }

  setGeoWatch(): void {
    window.setInterval(() => {
      if (this.geolastupdate) {
        if (new Date().getTime() - this.geolastupdate > 5000 && navigator.geolocation) {
          if (this.geoid) {
            navigator.geolocation.clearWatch(this.geoid);
            this.geoclearcount++;
            console.log(`Clear Geo Watch for ${this.geoid}`);
          }
          this.geoid = navigator.geolocation.watchPosition((position: Position) => {
            if (position) { this.zone.run(() => this.updateLocation(position)); }
          },
            (error: PositionError) => {
              console.log(error);
              this.geoerrorcount++;
              this.geolock = false;
              this.geomsg = `Position Error: ${error.message}`;
            },
            this.options);
        }
      }
    }, 5000);
  }

  updateLocation(position: Position): void {
    if (position) {
      console.log(`Latitude: ${position.coords.latitude} Longitude:  ${position.coords.longitude}`);

      this.geolock = false;
      this.geolastupdate = new Date().getTime();
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.geoupdatecount++;
      if (this.ride) {
        this.geomsg = `Lat: ${position.coords.latitude} Lng:  ${position.coords.longitude}`;
        if (this.loc) {
          if (this.loc.lat !== this.lat || this.loc.lng !== this.lng) {
            this.loc.lat = this.lat;
            this.loc.lng = this.lng;
            this.loc.marker.lat = this.lat;
            this.loc.marker.lng = this.lng;
          }
        } else {
          this.loc = {
          lat: this.lat,
          lng: this.lng,
          marker: { lat: this.lat, lng: this.lng, draggable: true },
          zoom: 15
          };
        }
        // trace current ride
        this.traceRide(this.girodiseo);
      }
    }
  }

  getCurrentLocation() {
    console.log('getCurrentLocation');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.zone.run(() => this.updateLocation(position));
      },
        (error: PositionError) => {
          console.log(error);
          this.geoerrorcount++;
          this.geolock = false;
          this.geomsg = `Position Error: ${error.message}`;
        },
          this.options);

    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.zone.run(() => {
            console.log(`Latitude: ${position.coords.latitude} Longitude:  ${position.coords.longitude}`);
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            console.log(this.lat);
            console.log(this.lng);
            // set location
            this.loc = {
              lat: this.lat,
              lng: this.lng,
              marker: { lat: this.lat, lng: this.lng, draggable: true },
              zoom: 15,
              address_level_1: 'via San Michele 12',
              address_level_2: 'Foresto Sparso',
              address_state: 'BG',
              address_country: 'Italia',
              address_zip: '24060'
            };
            this.mapsApiLoader.load().then(() => {
              this.findLocation(this.getFullAddress());
            });
          });
        }
      },
        (error: PositionError) => {
          console.log(error);
          this.geolock = false;
          this.geomsg = `Position Error: ${error.message}`;
        },
        this.options);

      this.geoid = navigator.geolocation.watchPosition((position: Position) => {
        if (position) {
          this.zone.run(() => this.updateLocation(position));
        }
      },
        (error: PositionError) => {
          console.log(error);
          this.geoerrorcount++;
          this.geolock = false;
          this.geomsg = `Position Error: ${error.message}`;
        },
        this.options);

    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  getFullAddress(): string {
    let full_address = this.loc.address_level_1 || '';

    if (this.loc.address_level_2) { full_address = full_address + ' ' + this.loc.address_level_2; }
    if (this.loc.address_state) { full_address = full_address + ' ' + this.loc.address_state; }
    if (this.loc.address_country) { full_address = full_address + ' ' + this.loc.address_country; }

    return full_address;
  }

  findLocation(address: string) {
    if (!this.geocoder) {
      this.geocoder = new google.maps.Geocoder();
    }
    this.geocoder.geocode({'address': address}, (results, status) => {
      console.log(results);
      if (status === google.maps.GeocoderStatus.OK) {
        for (let i = 0; i < results[0].address_components.length; i++) {
          const types = results[0].address_components[i].types;

          if (types.indexOf('locality') !== -1) {
            this.loc.address_level_2 = results[0].address_components[i].long_name;
          }
          if (types.indexOf('country') !== -1) {
            this.loc.address_country = results[0].address_components[i].long_name;
          }
          if (types.indexOf('postal_code') !== -1) {
            this.loc.address_zip = results[0].address_components[i].long_name;
          }
          if (types.indexOf('administrative_area_level_1') !== -1) {
            this.loc.address_state = results[0].address_components[i].long_name;
          }
        }

        if (results[0].geometry.location) {
          this.loc.lat = results[0].geometry.location.lat();
          this.loc.lng = results[0].geometry.location.lng();
          this.loc.marker.lat = results[0].geometry.location.lat();
          this.loc.marker.lng = results[0].geometry.location.lng();
          this.loc.marker.draggable = true;
          this.loc.viewport = results[0].geometry.viewport;
        }
      } else {
        alert('Sorry, this search produced no results.');
      }
    });
  }

  computeDistanceBetween(from: AgmLocation, to: AgmLocation): number {
    const llfrom = new google.maps.LatLng(from.lat, from.lng);
    const llto = new google.maps.LatLng(to.lat, to.lng);
    return google.maps.geometry.spherical.computeDistanceBetween(llfrom, llto);
  }

  inScope(point: CheckPoint): boolean {
    const distance = this.computeDistanceBetween(this.loc, point.loc);
    console.log(`Distance to check point is ${distance} for scope is ${point.scope}`);
    if (distance <= point.scope) {
      return true;
    } else {
      return false;
    }
  }

  currentEEP(point: CheckPoint): number {
    let current = -1;
    let distance = this.computeDistanceBetween(this.loc, point.loc);
    if (distance > point.scope) {
      return -1;
    } else if (distance <= point.radius) {
      return point.eep.length;
    }
    distance = point.scope + 1;
    for (let i = 0; i < point.eep.length; i++) {
      const dist = this.computeDistanceBetween(this.loc, point.eep[i].loc);
      if (dist < distance) {
        distance = dist;
        current = i;
      }
    }
    return current;
  }

  traceRide(giro: Giro): void {
    if (!this.ride) {
      console.log('Nothing to trace, no active ride');
      return;
    }
    if (!this.trace) {
      console.log(`Creating new trace for ${giro.name} ride ${this.ride.id}`);
      this.trace = { rideId: this.ride.id, points: [], next:  0, currentEEP: -1};
    }
    const chekPoint = giro.points[this.trace.next];
    const eep = this.currentEEP(chekPoint);
    const timestamp = new Date().getTime();
    if (eep === -1) {
      console.log(`Out of scope. No trace record added`);
    } else if (eep === this.trace.currentEEP) {
      // the same exit / entry point need to update current record
      if (this.trace.points.length === 0) {
        console.log('No trace record to update');
      } else {
        const point = this.trace.points[this.trace.points.length - 1];
        if (eep === chekPoint.eep.length) {
          // inside radius, update timestamp if distance is better
          const distance = this.computeDistanceBetween(this.loc, chekPoint.loc);
          if (distance < point.distance) {
            point.timestamp = timestamp;
            point.distance = distance;
            this.geomsg = `Check point pass time is updated ${this.datePipe.transform(timestamp, 'dd-MM-yy hh:mm:ss')}`;
            console.log(this.geomsg);
            console.log(`Here it is the trace record`);
            console.log(this.trace);
          } else {
            console.log(`Check point pass time is NOT updated`);
          }
        } else {
          // inside scope the same EEP update timestemp
          if (point.eep.length === 0) {
            console.log('No trace record to update for EEP');
          } else {
            // let's update time only for entry point
            if (point.eep[point.eep.length - 1].entry) {
              point.eep[point.eep.length - 1].timestamp = timestamp;
              this.geomsg = `Check point Entry time is updated ${this.datePipe.transform(timestamp, 'dd-MM-yy hh:mm:ss')}`;
              console.log(this.geomsg);
              console.log(`Here it is the trace record`);
              console.log(this.trace);
            } else {
              console.log(`Check point Exit time is not updated`);
            }
          }
        }
      }
    } else {
      // the new Entry / Exit point, first check if we are entering the radius
      if (eep === chekPoint.eep.length) {
        // entering radius record pass time
        if (this.trace.points.length === 0) {
          console.log('No trace record is found for enter point but we are entering radius');
        } else {
          const point = this.trace.points[this.trace.points.length - 1];
          const distance = this.computeDistanceBetween(this.loc, chekPoint.loc);
          point.timestamp = timestamp;
          point.distance = distance;
          this.trace.currentEEP = eep;
          this.geomsg = `Check point pass time is recorded ${this.datePipe.transform(timestamp, 'dd-MM-yy hh:mm:ss')}`;
          console.log(this.geomsg);
          console.log(`Here it is the trace record`);
          console.log(this.trace);
        }
      } else {
        // new Entry / Exit point
        if (this.trace.currentEEP === -1) {
          // addind new record for check point because we are in the scope
          const cp: CheckPoint = {
            id: chekPoint.id,
            loc: chekPoint.loc,
            type: chekPoint.type,
            scope: chekPoint.scope,
            radius: chekPoint.radius,
            eep: [{
              loc: chekPoint.eep[eep].loc,
              next: chekPoint.eep[eep].next,
              slow: chekPoint.eep[eep].slow,
              timestamp: timestamp,
              entry: true
            }]
          };
          this.trace.points.push(cp);
          this.trace.currentEEP = eep;
          this.geomsg = `Check point Entry time is recorded ${this.datePipe.transform(timestamp, 'dd-MM-yy hh:mm:ss')}`;
          console.log(this.geomsg);
          console.log(`Here it is the trace record`);
          console.log(this.trace);
        } else {
          // check if we are exiting the radius first
          if (this.trace.currentEEP === chekPoint.eep.length) {
            // yes we have passed checkpoint and exit radius, need to add exit point record
            if (this.trace.points.length === 0) {
              console.log('No trace record is found for enter point but we are exiting radius');
            } else {
              const point = this.trace.points[this.trace.points.length - 1];
              const exit: EnterExitPoint = {
                loc: chekPoint.eep[eep].loc,
                next: chekPoint.eep[eep].next,
                slow: chekPoint.eep[eep].slow,
                timestamp: timestamp,
                entry: false
              };
              point.eep.push(exit);
              point.passed = true;
              this.trace.currentEEP = eep;
              this.trace.next = chekPoint.eep[eep].next;
              if (chekPoint.eep[eep].nextEEP) {
                this.trace.nextEEP = chekPoint.eep[eep].nextEEP;
              }
              this.geomsg = `Check point Exit time is recorded ${this.datePipe.transform(timestamp, 'dd-MM-yy hh:mm:ss')}`;
              console.log(this.geomsg);
              console.log(`Here it is the trace record`);
              console.log(this.trace);
            }
          } else {
            // current EEP is not radius and we have got new exit / etry point, so let's add new etry point now
            if (this.trace.points.length === 0) {
              console.log('No trace record is found for enter point but we are have got the new entry point here');
            } else {
              const point = this.trace.points[this.trace.points.length - 1];
              this.trace.points[0].eep = [chekPoint.eep[eep]];
              this.trace.points[0].eep[0].timestamp = timestamp;
              this.trace.points[0].eep[0].entry = true;
              this.trace.currentEEP = eep;
              this.geomsg = `Check point New Enter time is recorded ${this.datePipe.transform(timestamp, 'dd-MM-yy hh:mm:ss')}`;
              console.log(this.geomsg);
              console.log(`Here it is the trace record`);
              console.log(this.trace);
            }
          }
        }
      }
    }
  }

  ngOnDestroy() {
    if (this.tags_subs) { this.tags_subs.unsubscribe(); }
    if (this.rides_subs) { this.rides_subs.unsubscribe(); }
    if (this.ride_subs) { this.ride_subs.unsubscribe(); }
    if (this.timer_subs) { this.timer_subs.unsubscribe(); }
    if (this.rider_subs) { this.rider_subs.unsubscribe(); }
    if (this.geotimer) { window.clearInterval(this.geotimer); }
  }

  clear() {
    this.tagid = null;
    this.start = 0;
    this.end = 10;
    this.progress = false;
    this.geolock = false;
    this.geoupdatecount = 0;
    this.geoerrorcount = 0;
    this.geoclearcount = 0;
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

  markerDragEnd(e: any): void {
    console.log(e.coords);
    this.loc.lat = e.coords.lat;
    this.loc.lng = e.coords.lng;
    // console.log(`In the scope: ${this.inScope(this.checkPoint)} current Exit/Entry is ${this.currentEEP(this.checkPoint)}`);
    this.traceRide(this.girodiseo);
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
    this.trace = {rideId: id, points: [], next: 0, currentEEP: -1};
    let ride: Ride;
    if (rider) {
      ride = { id, tagid, start, open, rider, trace: this.trace };
    } else {
      ride = { id, tagid, start, open, trace: this.trace };
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
    if (this.trace) {
      this.ride.trace = this.trace;
    }
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

