import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeshopComponent } from './bikeshop.component';

describe('BikeshopComponent', () => {
  let component: BikeshopComponent;
  let fixture: ComponentFixture<BikeshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
