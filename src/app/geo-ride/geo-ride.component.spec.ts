import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoRideComponent } from './geo-ride.component';

describe('GeoRideComponent', () => {
  let component: GeoRideComponent;
  let fixture: ComponentFixture<GeoRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
