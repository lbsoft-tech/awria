import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  readonly baseUrl = 'http://localhost:3000';
  textPhoto;
  textPhotoUrl = '';
  imagePhoto;
  imagePhotoUrl = '';
  videoPhoto;
  videoPhotoUrl = '';
  constructor(private httpClient: HttpClient) { }

  getUser(id) {
    return this.httpClient.get(this.baseUrl + '/users/' + id);
  }

  comparePassword(id, data) {
    const req = {
      user_id: id,
      password: data
    };
    return this.httpClient.post(this.baseUrl + '/users/comparePassword', req);
  }
  updatePassword(id, data) {
    const req = {
      user_id: id,
      password: data
    };
    return this.httpClient.post(this.baseUrl + '/users/updatePassword', req);
  }
  updateProfile(id, data) {
    const request = {
      id: id,
      data: data
    }
    return this.httpClient.post<any>(this.baseUrl + '/artist/updateProfile', request);
  }
  addShipping(id, data) {
    return this.httpClient.post(this.baseUrl + '/users/' + id, data);
  }
  addPost(data) {
    return this.httpClient.post(this.baseUrl + '/posts', data);
  }
}
