import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageProfileUnreadComponent } from './user-message-profile-unread.component';

describe('UserMessageProfileUnreadComponent', () => {
  let component: UserMessageProfileUnreadComponent;
  let fixture: ComponentFixture<UserMessageProfileUnreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMessageProfileUnreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMessageProfileUnreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
