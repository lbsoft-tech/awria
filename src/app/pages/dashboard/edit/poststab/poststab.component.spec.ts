import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoststabComponent } from './poststab.component';

describe('PoststabComponent', () => {
  let component: PoststabComponent;
  let fixture: ComponentFixture<PoststabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoststabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoststabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
