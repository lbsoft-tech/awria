import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSettingsAboutComponent } from './artist-settings-about.component';

describe('ArtistSettingsAboutComponent', () => {
  let component: ArtistSettingsAboutComponent;
  let fixture: ComponentFixture<ArtistSettingsAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSettingsAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSettingsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
