import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMessageProfileReadComponent } from './user-message-profile-read.component';

describe('UserMessageProfileReadComponent', () => {
  let component: UserMessageProfileReadComponent;
  let fixture: ComponentFixture<UserMessageProfileReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMessageProfileReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMessageProfileReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
