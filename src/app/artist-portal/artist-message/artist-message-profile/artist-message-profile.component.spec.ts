import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessageProfileComponent } from './artist-message-profile.component';

describe('ArtistMessageProfileComponent', () => {
  let component: ArtistMessageProfileComponent;
  let fixture: ComponentFixture<ArtistMessageProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessageProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
