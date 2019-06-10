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
    return this.httpClient.put(this.baseUrl + '/users/' + id, data);
  }
  updateProfile(id, data) {
    return this.httpClient.put(this.baseUrl + '/users/' + id, data);
  }
  addShipping(id, data) {
    return this.httpClient.post(this.baseUrl + '/users/' + id, data);
  }
  addPost(data) {
    return this.httpClient.post(this.baseUrl + '/posts', data);
  }
}
