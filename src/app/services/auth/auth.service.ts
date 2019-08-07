import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs/operators';
import { User } from 'src/app/_models/user/user';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserProfile } from 'src/app/_models/UserProfile/user-profile';
import { Roles } from 'src/app/_models/roles.enum';
import { Router } from '@angular/router';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly baseUrl = 'http://localhost:3000';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private currentUserProfileSubject: BehaviorSubject<UserProfile>;
  public currentUserProfile: Observable<UserProfile>;

  constructor(private httpClient: HttpClient, private router: Router) {
    FB.init({
      appId: 'YOUR- APP - ID - HERE',
      status: false, // the SDK will attempt to get info about the current user immediately after init
      cookie: false,  // enable cookies to allow the server to access
      // the session
      xfbml: false,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
      version: 'v2.8' // use graph api version 2.5
    });
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentUserProfileSubject = new BehaviorSubject<UserProfile>(null);
    this.currentUserProfile = this.currentUserProfileSubject.asObservable();
  }

  getUserProfile(id) {
    const data = { id: id };
    return this.httpClient.post<any>(this.baseUrl + '/artist/getProfile', data);
  }

  public set nextProfile(profile) {
    this.currentUserProfileSubject.next(profile);
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public get currentUserProfileValue(): UserProfile {
    return this.currentUserProfileSubject.value;
  }

  public isAuthValid() {
    return moment().isBefore(this.getExpiration());
  }

  login(data) {
    return this.httpClient.post<any>(this.baseUrl + '/auth/login', data).pipe(map(res => {
      // login successful if there's a jwt token in the response
      const user = new User();
      if (res.user && res.access_token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        user.id = res.user._id;
        user.email = res.user.email;
        user.name = res.user.name;
        user.role = res.user.role;
        user.password = res.user.password;
        user.token = res.access_token;
        user.tokenexpiresin = JSON.stringify(moment().add(res.expires_in, 'second'));
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }

      return user;
    }));
  }

  fbLogin() {
    return new Promise((resolve, reject) => {
      FB.login(result => {
        if (result.authResponse) {
          FB.api('/me', { fields: ['email', 'name'] }, (response) => {
            this.httpClient.post<any>(this.baseUrl + '/auth/login_fb', { email: response.email, name: response.name })
              .toPromise()
              .then(user_res => {
                // login successful if there's a jwt token in the response
                const user = new User();
                if (user_res.user && user_res.access_token) {
                  // store user details and jwt token in local storage to keep user logged in between page refresponsehes
                  user.id = user_res.user._id;
                  user.email = user_res.user.email;
                  user.name = user_res.user.name;
                  user.role = user_res.user.role;
                  user.password = user_res.user.password;
                  user.token = user_res.access_token;
                  user.tokenexpiresin = JSON.stringify(moment().add(user_res.expires_in, 'second'));
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
                  resolve(user);
                }

              })
              .catch(() => reject());
          });

        } else {
          reject();
        }
      }, { scope: 'public_profile,email' });
    });
  }

  signup(data) {
    return this.httpClient.post<any>(this.baseUrl + '/auth/register', data).pipe(map(res => {
      // login successful if there's a jwt token in the response
      const user = new User();
      if (res.user && res.access_token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        user.id = res.user._id;
        user.email = res.user.email;
        user.name = res.user.name;
        user.role = res.user.role;
        user.password = res.user.password;
        user.token = res.access_token;
        user.tokenexpiresin = JSON.stringify(moment().add(res.expires_in, 'second'));
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }

      return user;
    }));
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.currentUserProfileSubject.next(null);
  }
}
