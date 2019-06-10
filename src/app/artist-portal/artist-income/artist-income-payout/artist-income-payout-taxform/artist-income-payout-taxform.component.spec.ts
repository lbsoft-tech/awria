import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistIncomePayoutTaxformComponent } from './artist-income-payout-taxform.component';

describe('ArtistIncomePayoutTaxformComponent', () => {
  let component: ArtistIncomePayoutTaxformComponent;
  let fixture: ComponentFixture<ArtistIncomePayoutTaxformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistIncomePayoutTaxformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistIncomePayoutTaxformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
