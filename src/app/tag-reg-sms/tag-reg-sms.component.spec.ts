import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagRegSmsComponent } from './tag-reg-sms.component';

describe('TagRegSmsComponent', () => {
  let component: TagRegSmsComponent;
  let fixture: ComponentFixture<TagRegSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagRegSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagRegSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
