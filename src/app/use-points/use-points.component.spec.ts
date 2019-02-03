import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsePointsComponent } from './use-points.component';

describe('UsePointsComponent', () => {
  let component: UsePointsComponent;
  let fixture: ComponentFixture<UsePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
