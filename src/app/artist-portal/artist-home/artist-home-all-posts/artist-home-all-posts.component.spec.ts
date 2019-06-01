import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistHomeAllPostsComponent } from './artist-home-all-posts.component';

describe('ArtistHomeAllPostsComponent', () => {
  let component: ArtistHomeAllPostsComponent;
  let fixture: ComponentFixture<ArtistHomeAllPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistHomeAllPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistHomeAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
