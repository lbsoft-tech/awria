import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEditOffersComponent } from './artist-edit-offers.component';

describe('ArtistEditOffersComponent', () => {
  let component: ArtistEditOffersComponent;
  let fixture: ComponentFixture<ArtistEditOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistEditOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEditOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
