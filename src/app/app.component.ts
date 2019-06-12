import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { isPlatformBrowser } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { User } from './_models/user/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Awria';

  ngOnInit() {
  }

  constructor(private _auth: AuthService, private router:Router) {
    //this.initializeApp();
  }

  // initializeApp() {
  //   var userData;
  //   if (this._auth.isAuthValid() && !this._auth.isAuthenticated()) {
  //     var user = new User();
  //     this._auth.retrieveUser().subscribe((res) => {
  //       console.log(res);
  //       userData = res;
  //       user.id = userData._id;
  //       user.email = userData.email;
  //       user.name = userData.name;
  //       user.role = userData.role;
  //       user.password = userData.password;
  //       user.token = userData.access_token;
  //       user.tokenexpiresin = userData.expires_in;

  //       this._auth.setUser(user);

  //       this.router.navigateByUrl('/artist-portal/home/all');
  //     });

  //   }
  // }
}
