import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPatronsComponent } from './artist-patrons.component';

describe('ArtistPatronsComponent', () => {
  let component: ArtistPatronsComponent;
  let fixture: ComponentFixture<ArtistPatronsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPatronsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPatronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
