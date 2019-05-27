import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMessagePageAllComponent } from './artist-message-page-all.component';

describe('ArtistMessagePageAllComponent', () => {
  let component: ArtistMessagePageAllComponent;
  let fixture: ComponentFixture<ArtistMessagePageAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistMessagePageAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMessagePageAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
