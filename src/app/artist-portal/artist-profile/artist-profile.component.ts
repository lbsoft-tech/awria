import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';
import { UrlService } from 'src/app/services/url/url.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ArtistPageForm } from 'src/app/_models/ArtistPageForm/artist-page-form';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.scss']
})
export class ArtistProfileComponent implements OnInit {

  navLinks = [
    { path: 'artist-portal/profile/overview', label: 'Overview' },
    { path: 'artist-portal/profile/posts', label: 'Posts' },
  ];

  private Page_Subject: Subject<any>;
  Page_Observable: Observable<any>;

  dummy_urls = {
    profile: '../../../assets/images/posts/icon-camera.png',
    cover: ''
  };
  constructor(public router: Router, private _db: DatabaseService, private _url: UrlService, private _auth: AuthService) {
    this.Page_Subject = new BehaviorSubject<any>({
      name: "NA",
      sub_title: "NA",
      profile_img_url: this.dummy_urls.profile,
      cover_img_url: this.dummy_urls.cover
    });
    this.Page_Observable = this.Page_Subject.asObservable();
    this.update_page_info();
  }

  ngOnInit() {
  }

  overview() {
    this.router.navigateByUrl('/artist-portal/profile/overview')
  }

  posts() {
    this.router.navigateByUrl('/artist-portal/profile/posts')
  }

  private update_page_info() {
    this._db.get_artist_page().subscribe(
      (page_load) => {
        if (page_load.status) {
          var page_form = {
            name: page_load.page.name,
            profile_img_url: page_load.page.profile_img_url ? this._url.get_page_profile_img_url(this._auth.currentUserValue.id, page_load.page.profile_img_url) : this.dummy_urls.profile,
            cover_img_url: page_load.page.cover_img_url ? this._url.get_page_cover_img_url(this._auth.currentUserValue.id, page_load.page.cover_img_url) : this.dummy_urls.cover,
            sub_title: page_load.page.sub_title,
            singular: page_load.page.singular,
          };
          this.Page_Subject.next(page_form);
        }
      },
      (error) => {
        console.log(error);
      });
  }

}
