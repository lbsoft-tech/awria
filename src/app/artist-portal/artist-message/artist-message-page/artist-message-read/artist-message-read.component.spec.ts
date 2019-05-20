import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessageReadComponent } from './artist-message-read.component';

describe('ArtistMessageReadComponent', () => {
  let component: ArtistMessageReadComponent;
  let fixture: ComponentFixture<ArtistMessageReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessageReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessageReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
