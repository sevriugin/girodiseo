import { Component, OnInit, Output } from '@angular/core';
import { Frame, Bike, Rider, brands } from '../rider';
import { Observable, Subscription } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { TagService } from '../tag.service';
import { Tag, Registration } from '../tag';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  @Output() frame: Frame;

  brands: any;
  step: number;
  selected: any;
  model: any;
  change: string;
  grouptype: string;
  braketype: string;
  neworused: string;
  options = ['new', 'used'];
  current: number;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  percentage: number;
  progress: boolean;
  tagid: string;
  tags: Tag[];
  tag: Tag;
  locked: string;

  constructor(
    private storage: AngularFireStorage,
    private tagService: TagService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.tagid = this.route.snapshot.paramMap.get('id');
    this.locked = this.route.snapshot.paramMap.get('locked');
    this.brands = brands;
    this.step = 0;
    this.selected = undefined;
    this.change = undefined;
    this.progress = false;
    this.tag = undefined;
    this.current = 0;
    this.frame = undefined;
    this.tagService.getTagById(this.tagid)
      .subscribe(tags => {
        console.log(`FrameComponent: Tags fround for tagid: ${this.tagid}`);
        this.tags = tags;
        if (this.tags.length > 0) {
          this.tag = this.tags[0];
          if (this.tag.bike) {
            console.log('FrameComponent bike record is found');
            console.log(this.tag.bike);
            this.step = 2;
            this.frame = this.tag.bike.frame;
            console.log('FrameComponemt setting frame');
            console.log(this.frame);
            this.model = {
              name: this.frame.model,
              desc: `${this.frame.brand} ${this.frame.model}`,
              img: 'bike-blurred.jpg',
              brakes: ['disk'],
              group: ['electronic', 'mechanical'],
              };
            for (let i = 0; i < this.brands.length; i++ ) {
              if (this.brands[i].name === this.frame.brand) {
                this.selected = this.brands[i];
                break;
              }
            }
            if (!this.selected) {
              this.selected = { name: this.frame.brand, logo: 'giro_logo_big.png', class: 'noname-header-image'};
            }
          }
        }
      });
  }
  checkstatus() {
    console.log(`Check Status: ${this.neworused}`);
  }

  select(selection: any): void {
    if (this.step === 0) {
      console.log(`Brand: ${selection.name} selected`);
      this.step = 1;
      this.selected = selection;
    } else {
      console.log(`Model: ${selection.name} selected`);
      this.step = 2;
      this.model = selection;
      this.frame = {
        year: this.model.year,
        brand: this.selected.name,
        type: this.model.type,
        material: this.model.material,
        model: this.model.name
      };
    }
  }

  selectImage(event: any) {
    const index = event.target.innerHTML.indexOf('<div');
    console.log(event.target.innerHTML.slice(0, index));
    this.current = parseInt(event.target.innerHTML.slice(0, index), 10) - 1;
  }

  edit(field: string): void {
    if (this.locked) {
      return;
    }
    this.change = field;
    console.log(`Change: ${this.change}`);
  }

  unselect(): void {
    if (this.step === 1) {
      this.step = 0;
      this.selected = undefined;
    } else {
      if (this.tagid) {
        this.location.back();
      } else {
        this.step = 1;
        this.model = undefined;
        this.frame = undefined;
      }
    }
    this.change = undefined;
  }

  complited(): boolean {
    return this.frame.bin !== undefined &&
      this.frame.electronic !== undefined &&
      this.frame.disk !== undefined &&
      this.frame.new !== undefined &&
      this.frame.images !== undefined;
  }

  handleFileInput(files: FileList): void {
    const file = files[0];
    const filePath = `bikes/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    this.progress = true;
    // get notified when the download URL is available
    task.snapshotChanges()
      .pipe(finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if (this.frame.images === undefined) {
            this.frame.images = [];
          }
          this.current = this.frame.images.length;
          this.frame.images.push(url);
          this.progress = false;
        });
      }))
      .subscribe();
  }

  save(): void {
    if (!this.tag) {
      console.log('FrameComponent: Save: No Tag to save bike');
      return;
    } else {
      if (this.tag.bike) {
        this.tag.bike.frame = this.frame;
      } else {
        this.tag.bike = {tagid: this.tag.id, frame: this.frame};
      }
      console.log(`FrameComponent: Save : saving bike to TAG id ${this.tag.id}`);
      this.tagService.setBike(this.tag.id, this.tag.bike);
      this.locked = 'saved';
    }
  }

}
