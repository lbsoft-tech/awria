import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSettingsAppsComponent } from './artist-settings-apps.component';

describe('ArtistSettingsAppsComponent', () => {
  let component: ArtistSettingsAppsComponent;
  let fixture: ComponentFixture<ArtistSettingsAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSettingsAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSettingsAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
