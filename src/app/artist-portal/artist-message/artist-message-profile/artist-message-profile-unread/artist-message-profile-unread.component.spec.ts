import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessageProfileUnreadComponent } from './artist-message-profile-unread.component';

describe('ArtistMessageProfileUnreadComponent', () => {
  let component: ArtistMessageProfileUnreadComponent;
  let fixture: ComponentFixture<ArtistMessageProfileUnreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessageProfileUnreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessageProfileUnreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
