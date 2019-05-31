import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPatronsBlockedUsersComponent } from './artist-patrons-blocked-users.component';

describe('ArtistPatronsBlockedUsersComponent', () => {
  let component: ArtistPatronsBlockedUsersComponent;
  let fixture: ComponentFixture<ArtistPatronsBlockedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPatronsBlockedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPatronsBlockedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
