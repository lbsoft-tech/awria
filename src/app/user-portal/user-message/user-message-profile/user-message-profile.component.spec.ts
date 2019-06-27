import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageProfileComponent } from './user-message-profile.component';

describe('UserMessageProfileComponent', () => {
  let component: UserMessageProfileComponent;
  let fixture: ComponentFixture<UserMessageProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMessageProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMessageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
