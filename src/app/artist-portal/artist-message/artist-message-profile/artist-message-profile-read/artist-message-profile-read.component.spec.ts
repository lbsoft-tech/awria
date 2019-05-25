import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessageProfileReadComponent } from './artist-message-profile-read.component';

describe('ArtistMessageProfileReadComponent', () => {
  let component: ArtistMessageProfileReadComponent;
  let fixture: ComponentFixture<ArtistMessageProfileReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessageProfileReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessageProfileReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
