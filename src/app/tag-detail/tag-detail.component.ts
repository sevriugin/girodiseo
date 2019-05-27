import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import { Ride } from '../ride';
import { RideService } from '../ride.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css']
})
export class TagDetailComponent implements OnInit {
  tags: Tag[];
  rides: Ride[];
  start: number;
  end: number;

  displayedColumns: string[] = ['date', 'start', 'finish', 'time', 'link'];

  constructor(
    private tagService: TagService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private rideService: RideService
    ) {}

  ngOnInit() {
    this.start = 0;
    this.end = 10;
    this.getTag();
  }

  getTag(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tagService.getTagById(id)
      .subscribe(tags => this.tags = tags);
    this.rideService.getRidesByTagId(id)
      .subscribe(rides => this.rides = rides);
  }

  gotoTags(): void {
    this.router.navigate([`/tags`]);
  }

  gotoBike(): void {
    this.router.navigate([`/frame/${this.tags[0].id}/locked`]);
  }

  gotoBack(): void {
    this.location.back();
  }

  gotoRide(id: number): void {
    this.router.navigate([`/ride/${id}`]);
  }

  setPage(e: PageEvent): void {
    console.log(e);
    const { pageIndex, pageSize } = e;
    this.start = pageIndex * pageSize;
    this.end = this.start + pageSize;
  }

  gotoPayment(): void {
    if (!this.tags || this.tags.length === 0) {
      return;
    }
    const payment = this.tags[0].payment;
    this.router.navigate([`/order/${payment.reference}`]);
  }

}
