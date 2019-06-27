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

  get_artist_page() {
    return this.httpClient.get<any>(this.baseUrl + '/artist/get_artist_page');
  }

  update_artist_page(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/update_artist_page', data);
  }
  getUser(id) {
    return this.httpClient.get(this.baseUrl + '/users/' + id);
  }

  update_page_img(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/update_page_img', data);
  }
  update_page_cover(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/update_page_cover', data);
  }
  comparePassword(id, data) {
    const req = {
      user_id: id,
      password: data
    };
    return this.httpClient.post(this.baseUrl + '/artist/comparePassword', req);
  }
  updatePassword(id, data) {
    const req = {
      user_id: id,
      password: data
    };
    return this.httpClient.post(this.baseUrl + '/artist/updatePassword', req);
  }

  updatePhoto(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/updateProfilePicture', data);
  }

  updateProfile(id, data) {
    const request = {
      id: id,
      data: data
    }
    return this.httpClient.post<any>(this.baseUrl + '/artist/updateProfile', request);
  }
  addShipping(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/updateShipping', data);
  }
  addPost(data) {
    return this.httpClient.post(this.baseUrl + '/posts', data);
  }
}
