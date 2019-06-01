import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileSettingsEmailComponent } from './artist-profile-settings-email.component';

describe('ArtistProfileSettingsEmailComponent', () => {
  let component: ArtistProfileSettingsEmailComponent;
  let fixture: ComponentFixture<ArtistProfileSettingsEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileSettingsEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileSettingsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
