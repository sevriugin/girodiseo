import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageEvent } from '@angular/material';
import { TagService } from '../tag.service';
import { Tag } from '../tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Tag[];
  start: number;
  end: number;

  displayedColumns: string[] = ['id', 'date', 'mobile', 'link'];

  constructor(private tagService: TagService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getTags();
    this.clear();
  }

  clear() {
    this.start = 0;
    this.end = 10;
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
    return `... ${mobile.slice(6)}`;
  }
}
