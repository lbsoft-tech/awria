import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistHomeAllpostComponent } from './artist-home-allpost.component';

describe('ArtistHomeAllpostComponent', () => {
  let component: ArtistHomeAllpostComponent;
  let fixture: ComponentFixture<ArtistHomeAllpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistHomeAllpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistHomeAllpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
