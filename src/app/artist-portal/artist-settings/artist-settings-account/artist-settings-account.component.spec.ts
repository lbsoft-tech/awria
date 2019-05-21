import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSettingsAccountComponent } from './artist-settings-account.component';

describe('ArtistSettingsAccountComponent', () => {
  let component: ArtistSettingsAccountComponent;
  let fixture: ComponentFixture<ArtistSettingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSettingsAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSettingsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
