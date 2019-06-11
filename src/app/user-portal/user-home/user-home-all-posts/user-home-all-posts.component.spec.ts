import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeAllPostsComponent } from './user-home-all-posts.component';

describe('UserHomeAllPostsComponent', () => {
  let component: UserHomeAllPostsComponent;
  let fixture: ComponentFixture<UserHomeAllPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomeAllPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
