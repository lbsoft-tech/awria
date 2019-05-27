import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfilePostsComponent } from './artist-profile-posts.component';

describe('ArtistProfilePostsComponent', () => {
  let component: ArtistProfilePostsComponent;
  let fixture: ComponentFixture<ArtistProfilePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistProfilePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfilePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
