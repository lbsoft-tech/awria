import { Component, OnInit } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';
import { NewPostText } from 'src/app/_models/new_post_text/new-post-text';
import { UrlService } from 'src/app/services/url/url.service';

@Component({
  selector: 'app-artist-profile-overview',
  templateUrl: './artist-profile-overview.component.html',
  styleUrls: ['./artist-profile-overview.component.scss']
})
export class ArtistProfileOverviewComponent implements OnInit {

  Page_Subject: Subject<any>;
  Page_Observable: Observable<any>;
  Posts_Subject: Subject<any[]>;
  Posts_Observable: Observable<any[]>;

  constructor(private _db: DatabaseService, private _url: UrlService) {
    this.Page_Subject = new BehaviorSubject<any>({
      about: 'Not available',
      name: 'Not available'
    });
    this.Page_Observable = this.Page_Subject.asObservable();
    this.update_page_info();
    this.Posts_Subject = new BehaviorSubject<any[]>(null);
    this.Posts_Observable = this.Posts_Subject.asObservable();
    this.update_post_info();
  }

  update_page_info() {
    this._db.get_artist_page().subscribe(
      (page_load) => {
        if (page_load.status) {
          let page = page_load.page;
          var next = {
            about: page.about ? page.about : 'Not available',
            name: page.name ? page.name : 'Not available',
          };
          this.Page_Subject.next(next);
        }
      },
      (error) => {
        console.log(error);
      });
  }

  update_post_info() {
    this._db.get_artist_posts().subscribe((posts_load) => {
      if (posts_load.status) {
        var Posts = [];

        posts_load.posts.forEach(element => {
          console.log(element);
          var new_post_text = {
            title : element.title,
            story : element.story,
            image_file : element.photo ? /*this._url.get_post_image_url(element.user_id, element.photo)  */ '': '../../../../assets/images/posts/post_dummy.png',
            tags : element.tags,
            teaser_text : element.teaser,
            attachment_files : element.attachment_files,
            early_access_time : element.early_access_time,
            early_access : element.early_access,
            scheduled_time : element.scheduled_time,
            delivery_type : element.delivery_type,
            post_type : element.post_type,
          };
          Posts.push(new_post_text);
        });
        console.log(Posts);
        this.Posts_Subject.next(Posts);
      }
    });
  }

  ngOnInit() {
  }

}
