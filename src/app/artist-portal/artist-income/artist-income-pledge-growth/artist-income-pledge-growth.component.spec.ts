import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistIncomePledgeGrowthComponent } from './artist-income-pledge-growth.component';

describe('ArtistIncomePledgeGrowthComponent', () => {
  let component: ArtistIncomePledgeGrowthComponent;
  let fixture: ComponentFixture<ArtistIncomePledgeGrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistIncomePledgeGrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistIncomePledgeGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
