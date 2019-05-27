import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageEvent } from '@angular/material';
import { TagService } from '../tag.service';
import { Tag } from '../tag';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Tag[];
  start: number;
  end: number;
  date: Date;
  startDate: Date;
  mobile: string;

  displayedColumns: string[] = ['status', 'id', 'date', 'mobile', 'link'];

  constructor(private tagService: TagService, private route: ActivatedRoute, private router: Router, private datePipe: DatePipe) {}

  ngOnInit() {
    this.getTags();
    this.clear();
    this.startDate = new Date();
  }

  filterDate(): void {
    const regDate = this.datePipe.transform(this.date, 'dd-MM-yy');
    const result = [];
    for (let i = 0; i < this.tags.length; i++) {
      if (this.tags[i].regDate === regDate) {
        result.push(this.tags[i]);
      }
    }
    this.tags = result;
  }

  handleDateInput(date: any): void {
    console.log(date);
    this.date = date;
    if (!this.mobile) {
      this.tagService.getTagsByDate(this.datePipe.transform(date, 'dd-MM-yy')).subscribe(tags => this.tags = tags);
    } else {
      this.tagService.getTagsByMobile(this.mobile).subscribe(tags => {
        this.tags = tags;
        if (this.date) {
          this.filterDate();
        }
      });
    }
  }

  status(tag: Tag): string {
    if (tag.payment && tag.bike) {
      return 'bike';
    } else if (tag.bike && !tag.payment) {
      return 'error';
    } else if (!tag.bike && tag.payment) {
      return 'payment';
    } else {
      return 'test';
    }
  }

  handleMobileInput(mobile: string): void {
    console.log(mobile);
    this.tagService.getTagsByMobile(mobile).subscribe(tags => {
      this.tags = tags;
      if (this.date) {
        this.filterDate();
      }
    });
  }

  clear() {
    this.start = 0;
    this.end = 10;
    this.date = undefined;
    this.mobile = undefined;
  }

  clearDate() {
    this.date = undefined;
    this.mobile = undefined;
    this.getTags();
  }

  getTags(): void {
    this.tagService.getTags()
        .subscribe(tags => this.tags = tags);
  }

  gotoTagById(tag: Tag): void {
    const tagId = tag ? tag.id : null;
    this.router.navigate([`/tag/${tagId}`]);
  }

  setPage(e: PageEvent): void {
    console.log(e);
    const { pageIndex, pageSize } = e;
    this.start = pageIndex * pageSize;
    this.end = this.start + pageSize;
  }

  showMobile(mobile: string): string {
    const start = mobile.length - 7;
    if (start < 0) {
      return mobile;
    } else {
      return `${mobile.slice(start, start + 3)}-${mobile.slice(start + 3, start + 5)}-${mobile.slice(start + 5)}`;
    }
  }

  showTagId(id: string): string {
    const start = id.length - 4;
    if (id.length > 7) {
      return `${id.slice(0, 3)}...${id.slice(start)}`;
    } else {
      return id;
    }
  }
}
