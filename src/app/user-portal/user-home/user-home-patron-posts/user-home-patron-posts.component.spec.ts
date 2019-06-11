import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomePatronPostsComponent } from './user-home-patron-posts.component';

describe('UserHomePatronPostsComponent', () => {
  let component: UserHomePatronPostsComponent;
  let fixture: ComponentFixture<UserHomePatronPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHomePatronPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomePatronPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
