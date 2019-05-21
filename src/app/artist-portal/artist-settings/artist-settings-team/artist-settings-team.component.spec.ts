import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSettingsTeamComponent } from './artist-settings-team.component';

describe('ArtistSettingsTeamComponent', () => {
  let component: ArtistSettingsTeamComponent;
  let fixture: ComponentFixture<ArtistSettingsTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSettingsTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSettingsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
