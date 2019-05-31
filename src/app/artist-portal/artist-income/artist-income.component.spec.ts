import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistIncomeComponent } from './artist-income.component';

describe('ArtistIncomeComponent', () => {
  let component: ArtistIncomeComponent;
  let fixture: ComponentFixture<ArtistIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
