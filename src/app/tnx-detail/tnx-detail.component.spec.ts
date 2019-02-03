import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TnxDetailComponent } from './tnx-detail.component';

describe('TnxDetailComponent', () => {
  let component: TnxDetailComponent;
  let fixture: ComponentFixture<TnxDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TnxDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TnxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
