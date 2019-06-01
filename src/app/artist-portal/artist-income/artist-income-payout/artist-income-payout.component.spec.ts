import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistIncomePayoutComponent } from './artist-income-payout.component';

describe('ArtistIncomePayoutComponent', () => {
  let component: ArtistIncomePayoutComponent;
  let fixture: ComponentFixture<ArtistIncomePayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistIncomePayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistIncomePayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
