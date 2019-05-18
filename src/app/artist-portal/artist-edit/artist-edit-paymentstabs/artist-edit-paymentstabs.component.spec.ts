import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEditPaymentstabsComponent } from './artist-edit-paymentstabs.component';

describe('ArtistEditPaymentstabsComponent', () => {
  let component: ArtistEditPaymentstabsComponent;
  let fixture: ComponentFixture<ArtistEditPaymentstabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistEditPaymentstabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEditPaymentstabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
