import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessageComponent } from './artist-message.component';

describe('ArtistMessageComponent', () => {
  let component: ArtistMessageComponent;
  let fixture: ComponentFixture<ArtistMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
