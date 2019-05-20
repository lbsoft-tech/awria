import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostVideoComponent } from './new-post-video.component';

describe('NewPostVideoComponent', () => {
  let component: NewPostVideoComponent;
  let fixture: ComponentFixture<NewPostVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
