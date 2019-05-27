import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPayoutComponent } from './artist-payout.component';

describe('ArtistPayoutComponent', () => {
  let component: ArtistPayoutComponent;
  let fixture: ComponentFixture<ArtistPayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
