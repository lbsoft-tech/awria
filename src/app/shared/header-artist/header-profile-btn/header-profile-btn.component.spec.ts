import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfileBtnComponent } from './header-profile-btn.component';

describe('HeaderProfileBtnComponent', () => {
  let component: HeaderProfileBtnComponent;
  let fixture: ComponentFixture<HeaderProfileBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderProfileBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderProfileBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
