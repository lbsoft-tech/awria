import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageProfileAllComponent } from './user-message-profile-all.component';

describe('UserMessageProfileAllComponent', () => {
  let component: UserMessageProfileAllComponent;
  let fixture: ComponentFixture<UserMessageProfileAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMessageProfileAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMessageProfileAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
