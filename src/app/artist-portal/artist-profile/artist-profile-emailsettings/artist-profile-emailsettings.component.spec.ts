import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileEmailsettingsComponent } from './artist-profile-emailsettings.component';

describe('ArtistProfileEmailsettingsComponent', () => {
  let component: ArtistProfileEmailsettingsComponent;
  let fixture: ComponentFixture<ArtistProfileEmailsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileEmailsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileEmailsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
