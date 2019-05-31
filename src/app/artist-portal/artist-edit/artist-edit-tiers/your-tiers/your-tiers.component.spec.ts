import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTiersComponent } from './your-tiers.component';

describe('YourTiersComponent', () => {
  let component: YourTiersComponent;
  let fixture: ComponentFixture<YourTiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
