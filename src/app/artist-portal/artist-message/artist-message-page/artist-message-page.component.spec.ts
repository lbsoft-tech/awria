import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessagePageComponent } from './artist-message-page.component';

describe('ArtistMessagePageComponent', () => {
  let component: ArtistMessagePageComponent;
  let fixture: ComponentFixture<ArtistMessagePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessagePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
