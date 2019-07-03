import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeValidationComponent } from './age-validation.component';

describe('AgeValidationComponent', () => {
  let component: AgeValidationComponent;
  let fixture: ComponentFixture<AgeValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
