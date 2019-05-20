import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessageAllComponent } from './artist-message-all.component';

describe('ArtistMessageAllComponent', () => {
  let component: ArtistMessageAllComponent;
  let fixture: ComponentFixture<ArtistMessageAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessageAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessageAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
