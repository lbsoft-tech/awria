import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  readonly baseUrl = 'http://localhost:3000';
  textPhoto;
  textPhotoName;
  videoPhotoName;

  textPhotoUrl = '';
  imagePhoto;
  imagePhotoUrl = '';
  videoPhoto;
  videoPhotoUrl = '';
  constructor(private httpClient: HttpClient) { }

  get_artist_page() {
    return this.httpClient.get<any>(this.baseUrl + '/artist/get_artist_page');
  }

  create_text_post(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/create_text_post', data);
  }

  save_text_post_photo(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/save_text_post_photo', data);
  }

  save_text_post_attachment(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/save_text_post_attachment', data);
  }

  get_artist_posts() {
     return this.httpClient.get<any>(this.baseUrl + '/artist/get_artist_posts');
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
  addTextPost(data) {

    console.log(data);
    return this.httpClient.post(this.baseUrl + '/artist/post/new/text/text', data);
  }
  uploadTextImage(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/post/new/text/uploadImage', data)
  }
  uploadTextAttachment(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/post/new/text/uploadAttachment', data)
  }
  addImagePost(data) {

    console.log(data);
    return this.httpClient.post(this.baseUrl + '/artist/post/new/image/image', data);
  }
  uploadImagePhoto(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/post/new/image/uploadImage', data)
  }
  uploadImageAttachment(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/post/new/image/uploadAttachment', data)
  }
  uploadVideoImage(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/post/new/video/uploadImage', data)
  }
  addVideoPost(data) {
    return this.httpClient.post<any>(this.baseUrl + '/artist/post/new/video/video', data)
  }
}
