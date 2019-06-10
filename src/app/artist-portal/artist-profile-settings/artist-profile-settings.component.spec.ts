import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileSettingsComponent } from './artist-profile-settings.component';

describe('ArtistProfileSettingsComponent', () => {
  let component: ArtistProfileSettingsComponent;
  let fixture: ComponentFixture<ArtistProfileSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
