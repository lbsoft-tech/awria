import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistIncomeEarningsComponent } from './artist-income-earnings.component';

describe('ArtistIncomeEarningsComponent', () => {
  let component: ArtistIncomeEarningsComponent;
  let fixture: ComponentFixture<ArtistIncomeEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistIncomeEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistIncomeEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
