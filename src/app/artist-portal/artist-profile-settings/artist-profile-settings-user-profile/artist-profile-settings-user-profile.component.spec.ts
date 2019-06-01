import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileSettingsUserProfileComponent } from './artist-profile-settings-user-profile.component';

describe('ArtistProfileSettingsUserProfileComponent', () => {
  let component: ArtistProfileSettingsUserProfileComponent;
  let fixture: ComponentFixture<ArtistProfileSettingsUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileSettingsUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileSettingsUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
