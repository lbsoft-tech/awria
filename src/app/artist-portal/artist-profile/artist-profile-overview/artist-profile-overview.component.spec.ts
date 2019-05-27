import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileOverviewComponent } from './artist-profile-overview.component';

describe('ArtistProfileOverviewComponent', () => {
  let component: ArtistProfileOverviewComponent;
  let fixture: ComponentFixture<ArtistProfileOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfileOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
