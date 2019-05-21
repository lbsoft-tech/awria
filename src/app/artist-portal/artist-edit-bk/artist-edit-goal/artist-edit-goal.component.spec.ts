import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEditGoalComponent } from './artist-edit-goal.component';

describe('ArtistEditGoalComponent', () => {
  let component: ArtistEditGoalComponent;
  let fixture: ComponentFixture<ArtistEditGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistEditGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEditGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
