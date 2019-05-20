import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEditThanksComponent } from './artist-edit-thanks.component';

describe('ArtistEditThanksComponent', () => {
  let component: ArtistEditThanksComponent;
  let fixture: ComponentFixture<ArtistEditThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistEditThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEditThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
