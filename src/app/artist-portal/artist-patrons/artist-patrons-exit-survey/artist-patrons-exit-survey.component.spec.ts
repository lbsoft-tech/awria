import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPatronsExitSurveyComponent } from './artist-patrons-exit-survey.component';

describe('ArtistPatronsExitSurveyComponent', () => {
  let component: ArtistPatronsExitSurveyComponent;
  let fixture: ComponentFixture<ArtistPatronsExitSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPatronsExitSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPatronsExitSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
