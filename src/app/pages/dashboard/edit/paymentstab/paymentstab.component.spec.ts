import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentstabComponent } from './paymentstab.component';

describe('PaymentstabComponent', () => {
  let component: PaymentstabComponent;
  let fixture: ComponentFixture<PaymentstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
