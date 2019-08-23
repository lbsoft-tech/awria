import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  APP_MODE;
  api_url;

  constructor() {
    this.APP_MODE = environment.production ? 'Prod' : 'Dev';
    if (this.APP_MODE === 'Prod') {
      this.api_url = 'http://localhost:3000';
    } else {
      this.api_url = 'http://localhost:3000';
    }
  }
  get_post_image_url(id, post_id, post_type ,name) {
    return this.api_url + '/static/uploads/' + id + '/page/post/text/image/' + name;
  }
  get_page_profile_img_url(id, name) {
    return this.api_url + '/static/uploads/' + id + '/page/profile_pictures/' + name;
  }

  get_page_cover_img_url(id, name) {
    return this.api_url + '/static/uploads/' + id + '/page/cover_pictures/' + name;
  }
}
