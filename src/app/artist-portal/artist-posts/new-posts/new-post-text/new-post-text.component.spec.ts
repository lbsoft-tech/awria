import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostTextComponent } from './new-post-text.component';

describe('NewPostTextComponent', () => {
  let component: NewPostTextComponent;
  let fixture: ComponentFixture<NewPostTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
