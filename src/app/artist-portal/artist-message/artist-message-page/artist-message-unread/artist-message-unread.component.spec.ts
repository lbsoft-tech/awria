import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessageUnreadComponent } from './artist-message-unread.component';

describe('ArtistMessageUnreadComponent', () => {
  let component: ArtistMessageUnreadComponent;
  let fixture: ComponentFixture<ArtistMessageUnreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessageUnreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessageUnreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
