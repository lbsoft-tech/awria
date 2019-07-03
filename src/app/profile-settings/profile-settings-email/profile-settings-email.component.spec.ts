import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsEmailComponent } from './profile-settings-email.component';

describe('ProfileSettingsEmailComponent', () => {
  let component: ProfileSettingsEmailComponent;
  let fixture: ComponentFixture<ProfileSettingsEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSettingsEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
