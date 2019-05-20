import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostImageComponent } from './new-post-image.component';

describe('NewPostImageComponent', () => {
  let component: NewPostImageComponent;
  let fixture: ComponentFixture<NewPostImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
