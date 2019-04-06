import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';
import { Tag } from '../tag';

@Component({
  selector: 'app-user-tags',
  templateUrl: './user-tags.component.html',
  styleUrls: ['./user-tags.component.css']
})
export class UserTagsComponent implements OnInit {
  @Input() tags: Tag[];
  start: number;
  end: number;

  displayedColumns: string[] = ['id', 'date', 'link'];

  constructor(private router: Router) { }

  ngOnInit() {
    this.start = 0;
    this.end = 10;
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

}
