import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessagePageReadComponent } from './artist-message-page-read.component';

describe('ArtistMessagePageReadComponent', () => {
  let component: ArtistMessagePageReadComponent;
  let fixture: ComponentFixture<ArtistMessagePageReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessagePageReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessagePageReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
