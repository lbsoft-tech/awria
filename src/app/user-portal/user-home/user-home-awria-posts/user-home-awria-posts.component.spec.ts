import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeAwriaPostsComponent } from './user-home-awria-posts.component';

describe('UserHomeAwriaPostsComponent', () => {
  let component: UserHomeAwriaPostsComponent;
  let fixture: ComponentFixture<UserHomeAwriaPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomeAwriaPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeAwriaPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
