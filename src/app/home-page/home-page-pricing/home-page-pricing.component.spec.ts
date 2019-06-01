import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagePricingComponent } from './home-page-pricing.component';

describe('HomePagePricingComponent', () => {
  let component: HomePagePricingComponent;
  let fixture: ComponentFixture<HomePagePricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagePricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
