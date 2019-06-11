import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMembershipsComponent } from './user-memberships.component';

describe('UserMembershipsComponent', () => {
  let component: UserMembershipsComponent;
  let fixture: ComponentFixture<UserMembershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMembershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMembershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
