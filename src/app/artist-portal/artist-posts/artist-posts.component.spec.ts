import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPostsComponent } from './artist-posts.component';

describe('ArtistPostsComponent', () => {
  let component: ArtistPostsComponent;
  let fixture: ComponentFixture<ArtistPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
