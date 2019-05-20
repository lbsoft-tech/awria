import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/shared/login/login.component.spec.ts
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
=======
import { ArtistEditComponent } from './artist-edit.component';

describe('ArtistEditComponent', () => {
  let component: ArtistEditComponent;
  let fixture: ComponentFixture<ArtistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistEditComponent ]
>>>>>>> 921135eaaca4e445e344dc29e05cf47e4b89e86a:src/app/artist-portal/artist-edit-bk/artist-edit.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/shared/login/login.component.spec.ts
    fixture = TestBed.createComponent(LoginComponent);
=======
    fixture = TestBed.createComponent(ArtistEditComponent);
>>>>>>> 921135eaaca4e445e344dc29e05cf47e4b89e86a:src/app/artist-portal/artist-edit-bk/artist-edit.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
