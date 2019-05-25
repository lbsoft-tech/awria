import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessageProfileAllComponent } from './artist-message-profile-all.component';

describe('ArtistMessageProfileAllComponent', () => {
  let component: ArtistMessageProfileAllComponent;
  let fixture: ComponentFixture<ArtistMessageProfileAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessageProfileAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessageProfileAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
