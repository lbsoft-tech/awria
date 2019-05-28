import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistHomePatrononlypostComponent } from './artist-home-patrononlypost.component';

describe('ArtistHomePatrononlypostComponent', () => {
  let component: ArtistHomePatrononlypostComponent;
  let fixture: ComponentFixture<ArtistHomePatrononlypostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistHomePatrononlypostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistHomePatrononlypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
