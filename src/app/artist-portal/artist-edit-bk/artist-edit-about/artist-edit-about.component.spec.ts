import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEditAboutComponent } from './artist-edit-about.component';

describe('ArtistEditAboutComponent', () => {
  let component: ArtistEditAboutComponent;
  let fixture: ComponentFixture<ArtistEditAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistEditAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEditAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
