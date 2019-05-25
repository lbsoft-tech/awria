import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessagePageUnreadComponent } from './artist-message-page-unread.component';

describe('ArtistMessagePageUnreadComponent', () => {
  let component: ArtistMessagePageUnreadComponent;
  let fixture: ComponentFixture<ArtistMessagePageUnreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessagePageUnreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessagePageUnreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
