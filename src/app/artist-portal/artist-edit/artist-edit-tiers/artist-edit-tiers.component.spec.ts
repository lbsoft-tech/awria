import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEditTiersComponent } from './artist-edit-tiers.component';

describe('ArtistEditTiersComponent', () => {
  let component: ArtistEditTiersComponent;
  let fixture: ComponentFixture<ArtistEditTiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistEditTiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEditTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
