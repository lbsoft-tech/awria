import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileUserprofileComponent } from './artist-profile-userprofile.component';

describe('ArtistProfileUserprofileComponent', () => {
  let component: ArtistProfileUserprofileComponent;
  let fixture: ComponentFixture<ArtistProfileUserprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileUserprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileUserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
