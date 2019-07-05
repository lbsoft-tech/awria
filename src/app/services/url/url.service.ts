import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  get_page_profile_img_url(id,name){
    return 'http://localhost:3000/static/uploads/' + id + '/page/profile_pictures/' + name;
  }

  get_page_cover_img_url(id,name){
    return 'http://localhost:3000/static/uploads/' + id + '/page/cover_pictures/' + name;
  }
}
