import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsUserProfileComponent } from './profile-settings-user-profile.component';

describe('ProfileSettingsUserProfileComponent', () => {
  let component: ProfileSettingsUserProfileComponent;
  let fixture: ComponentFixture<ProfileSettingsUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSettingsUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
