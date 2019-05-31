import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveMembershipsComponent } from './active-memberships.component';

describe('ActiveMembershipsComponent', () => {
  let component: ActiveMembershipsComponent;
  let fixture: ComponentFixture<ActiveMembershipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveMembershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveMembershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
