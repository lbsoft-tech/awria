import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { isPlatformBrowser } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { User } from './_models/user/user';
import { UserProfile } from './_models/UserProfile/user-profile';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Awria';

  ngOnInit() {
  }

  constructor(private _auth: AuthService, private router: Router) {

    _auth.getUserProfile(this._auth.currentUserValue.id).subscribe((res) => {
      const user_profile = new UserProfile();
      if (res.profile) {
        user_profile._id = res.profile._id;
        user_profile.user_id = res.profile.user_id;
        user_profile.country = res.profile.country;
        user_profile.about = res.profile.about;
        this._auth.nextProfile = user_profile;
      }
      return user_profile;
    });
  }


}
