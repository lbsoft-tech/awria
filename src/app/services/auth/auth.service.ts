import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs/operators';
import { User } from 'src/app/_models/user/user';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserProfile } from 'src/app/_models/UserProfile/user-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly baseUrl = 'http://localhost:3000';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private currentUserProfileSubject: BehaviorSubject<UserProfile>;
  public currentUserProfile: Observable<UserProfile>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    if (this.currentUserSubject.value) {
      this.currentUserProfileSubject = new BehaviorSubject<UserProfile>(null);
      this.getUserProfile(this.currentUserSubject.value.id);
      this.currentUserProfile = this.currentUserProfileSubject.asObservable();
    }
  }

  getUserProfile(id) {
    const data = { id: id };
    return this.httpClient.post<any>(this.baseUrl + '/artist/getProfile', data);
  }

  public set nextProfile(profile){
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
        this.getUserProfile(user.id);
      }

      return user;
    }));
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
        this.getUserProfile(user.id);
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
  }
}
