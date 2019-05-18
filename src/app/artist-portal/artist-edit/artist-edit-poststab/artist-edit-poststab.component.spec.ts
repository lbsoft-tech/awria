import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEditPoststabComponent } from './artist-edit-poststab.component';

describe('ArtistEditPoststabComponent', () => {
  let component: ArtistEditPoststabComponent;
  let fixture: ComponentFixture<ArtistEditPoststabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistEditPoststabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEditPoststabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
