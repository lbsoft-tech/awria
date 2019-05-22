import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSettingsYouremailsettingsComponent } from './artist-settings-youremailsettings.component';

describe('ArtistSettingsYouremailsettingsComponent', () => {
  let component: ArtistSettingsYouremailsettingsComponent;
  let fixture: ComponentFixture<ArtistSettingsYouremailsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSettingsYouremailsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSettingsYouremailsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
