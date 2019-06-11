import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { User } from 'src/app/_models/user/user';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly baseUrl = 'http://localhost:3000';
  private User: User;

  constructor(private httpClient: HttpClient) {
    this.User = null;
  }

  setUser(obj: User) {
    this.User = obj;
  }
  isAuthenticated() {
    return this.User != null;
  }

  getCurrentUser() {
    return this.User;
  }

  public isAuthValid() {
        return moment().isBefore(this.getExpiration());
    }

  login(data) {
    return this.httpClient.post(this.baseUrl + '/auth/login', data);
  }

  signup(data) {
    return this.httpClient.post(this.baseUrl + '/auth/register', data);
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
