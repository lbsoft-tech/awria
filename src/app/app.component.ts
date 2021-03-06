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

    this._auth.currentUser.subscribe((res) => {
      if (res) {
        _auth.getUserProfile(res.id).subscribe((res1) => {
          const user_profile = new UserProfile();
          if (res1.profile != null) {
            user_profile._id = res1.profile._id;
            user_profile.user_id = res1.profile.user_id;
            user_profile.country = res1.profile.country;
            user_profile.about = res1.profile.about;
            user_profile.profile_photo = res1.profile.ProfilePhoto;
            if (res1.profile.shipping) {
              user_profile.shipping = {
                name: res1.profile.shipping.Name,
                address: res1.profile.shipping.Address,
                city: res1.profile.shipping.City,
                country: res1.profile.shipping.Country,
                state: res1.profile.shipping.State,
                postcode: res1.profile.shipping.PostCode,
                apartment: res1.profile.shipping.Apartment,
              };
            }

            this._auth.nextProfile = user_profile;
          }
          return user_profile;
        });
      }
    });

  }


}
