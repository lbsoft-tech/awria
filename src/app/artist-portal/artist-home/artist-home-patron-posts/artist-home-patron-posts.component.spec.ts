import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistHomePatronPostsComponent } from './artist-home-patron-posts.component';

describe('ArtistHomePatronPostsComponent', () => {
  let component: ArtistHomePatronPostsComponent;
  let fixture: ComponentFixture<ArtistHomePatronPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistHomePatronPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistHomePatronPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
