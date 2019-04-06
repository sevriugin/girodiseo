import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingResultComponent } from './shopping-result.component';

describe('ShoppingResultComponent', () => {
  let component: ShoppingResultComponent;
  let fixture: ComponentFixture<ShoppingResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
