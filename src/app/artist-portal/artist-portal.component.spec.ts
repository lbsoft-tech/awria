import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPortalComponent } from './artist-portal.component';

describe('ArtistPortalComponent', () => {
  let component: ArtistPortalComponent;
  let fixture: ComponentFixture<ArtistPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
