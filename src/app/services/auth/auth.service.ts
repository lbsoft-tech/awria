import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly baseUrl= 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }


  login(data) {
    return this.httpClient.post(this.baseUrl + '/auth/login', data);
  }

  signup(data) {
    return this.httpClient.post(this.baseUrl + '/auth/register', data);
  }
}
