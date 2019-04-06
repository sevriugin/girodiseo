import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTnxComponent } from './user-tnx.component';

describe('UserTnxComponent', () => {
  let component: UserTnxComponent;
  let fixture: ComponentFixture<UserTnxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTnxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTnxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
