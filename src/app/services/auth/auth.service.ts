import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = `//localhost:27017/awria-database`;
  constructor(private httpClient: HttpClient) { }


  login(data) {
    return this.httpClient.post(this.baseUrl + '/api/auth/login', data, { headers: { 'content-type': 'application/json' } })
      .pipe(first())
      .toPromise();
  }

  signup(data) {
    return this.httpClient.post(this.baseUrl + '/api/users/signup', data, { responseType: 'text' })
      .pipe(first())
      .toPromise();
  }
}
