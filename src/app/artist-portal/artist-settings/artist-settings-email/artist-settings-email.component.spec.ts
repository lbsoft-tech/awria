import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSettingsEmailComponent } from './artist-settings-email.component';

describe('ArtistSettingsEmailComponent', () => {
  let component: ArtistSettingsEmailComponent;
  let fixture: ComponentFixture<ArtistSettingsEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSettingsEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSettingsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
