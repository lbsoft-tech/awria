import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistNotificationsComponent } from './artist-notifications.component';

describe('ArtistNotificationsComponent', () => {
  let component: ArtistNotificationsComponent;
  let fixture: ComponentFixture<ArtistNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
