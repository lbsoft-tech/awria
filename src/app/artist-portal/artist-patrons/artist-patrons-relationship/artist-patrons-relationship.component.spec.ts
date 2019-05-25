import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPatronsRelationshipComponent } from './artist-patrons-relationship.component';

describe('ArtistPatronsRelationshipComponent', () => {
  let component: ArtistPatronsRelationshipComponent;
  let fixture: ComponentFixture<ArtistPatronsRelationshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPatronsRelationshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPatronsRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
