import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyemailsettingComponent } from './myemailsetting.component';

describe('MyemailsettingComponent', () => {
  let component: MyemailsettingComponent;
  let fixture: ComponentFixture<MyemailsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyemailsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyemailsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
