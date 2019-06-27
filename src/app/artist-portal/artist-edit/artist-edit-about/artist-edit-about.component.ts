import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DatabaseService } from 'src/app/services/database/database.service';
import Swal from 'sweetalert2';
import { ngfModule, ngf } from 'angular-file';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClient, HttpClientModule, HttpRequest, HttpResponse, HttpEvent
} from "@angular/common/http"
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ArtistPageForm } from 'src/app/_models/ArtistPageForm/artist-page-form';
import { LaunchChecklist } from 'src/app/_models/LaunchChecklist/launch-checklist';

@Component({
  selector: 'app-artist-edit-about',
  templateUrl: './artist-edit-about.component.html',
  styleUrls: ['./artist-edit-about.component.scss']
})
export class ArtistEditAboutComponent implements OnInit {



  Default_Page_Form: ArtistPageForm;
  Subject_Page_Form: BehaviorSubject<ArtistPageForm>;
  Observable_Page_Form: Observable<ArtistPageForm>;
  public page_form: ArtistPageForm = {
    name: 'Demo',
    about: 'Demo',
    sub_title: 'Demo',
    singular: true,
    profile_img_url: '../../../assets/images/posts/egg-person.jpg',
    cover_img_url: '../../../assets/images/posts/its_easy_if_you_try-5332.jpg',
    patreon_page_url: 'Demo',
    adult_content: true,
    rss_feed: true,
    ga_tracking_id: 'Demo',
    into_video_url: 'Demo',
  }

  Subject_Launch_Checklist: BehaviorSubject<LaunchChecklist>;
  Observable_Launch_Checklist: Observable<LaunchChecklist>;
  Subject_Image_Urls: BehaviorSubject<string[]>;
  Observable_Image_Urls:Observable<string[]>;


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]


  }

  constructor(private _db: DatabaseService, private _auth: AuthService) {
    this.Default_Page_Form = {
      name: 'Demo',
      about: 'Demo',
      sub_title: 'Demo',
      singular: true,
      profile_img_url: '../../../assets/images/posts/egg-person.jpg',
      cover_img_url: '../../../assets/images/posts/its_easy_if_you_try-5332.jpg',
      patreon_page_url: 'Demo',
      adult_content: true,
      rss_feed: true,
      ga_tracking_id: 'Demo',
      into_video_url: 'Demo',
    };
    this.Subject_Page_Form = new BehaviorSubject<ArtistPageForm>(this.Default_Page_Form);
    this.Observable_Page_Form = this.Subject_Page_Form.asObservable();
    this.update_artist_page_info();
    this.Subject_Launch_Checklist = new BehaviorSubject<LaunchChecklist>({
      profile: false,
      cover: false,
      about: false,
      phone: false,
    });
    this.Observable_Launch_Checklist = this.Subject_Launch_Checklist.asObservable();
    this.Subject_Image_Urls = new BehaviorSubject<string[]>([this.Default_Page_Form.profile_img_url, this.Default_Page_Form.cover_img_url]);
    this.Observable_Image_Urls = this.Subject_Image_Urls.asObservable();
  }

  private update_artist_page_info() {
    this._db.get_artist_page().subscribe((res) => {
      if (res.status) {
        let artist_page = res.page;
        var page = new ArtistPageForm();
        page = {
          name: artist_page.name,
          about: artist_page.about,
          sub_title: artist_page.sub_title,
          singular: artist_page.singular,
          profile_img_url: artist_page.profile_img_url ? 'http://localhost:3000/static/uploads/' + this._auth.currentUserValue.id + '/page/profile_pictures/' + artist_page.profile_img_url : this.page_form.profile_img_url,
          cover_img_url: artist_page.cover_img_url ? 'http://localhost:3000/static/uploads/' + this._auth.currentUserValue.id + '/page/cover_pictures/' + artist_page.cover_img_url : this.page_form.cover_img_url,
          patreon_page_url: artist_page.patreon_page_url,
          adult_content: artist_page.adult_content,
          rss_feed: artist_page.rss_feed,
          ga_tracking_id: artist_page.ga_tracking_id,
          into_video_url: artist_page.into_video_url,
        };
        var launch_checklist = new LaunchChecklist();
        if (artist_page.profile_img_url) {
          launch_checklist.profile = true;
        }
        if (artist_page.cover_img_url) {
          launch_checklist.cover = true;
        }
        if (artist_page.about) {
          launch_checklist.about = true;
        }
        launch_checklist.phone = false;
        this.Subject_Image_Urls.next([page.profile_img_url, page.cover_img_url]);
        this.Subject_Launch_Checklist.next(launch_checklist);
        this.page_form = page;
        this.Subject_Page_Form.next(page);
      }
    }, (error) => {
      console.log(error);
    });
  }

  toggle_singular(event) {
    this.page_form.singular = event.value;
  }

  update_page_img(event) {
    if (event.target.files) {
      var page_img = event.target.files[0];
      let formData = new FormData();
      const file_name = Date.now() + page_img.name;
      formData.append('file_name', file_name);
      formData.append('upload', page_img);
      formData.append('id', this._auth.currentUserValue.id);
      this._db.update_page_img(formData).subscribe((res) => {
        if (res.status) {
          Swal.fire({
            title: 'Success',
            text: 'Page image updated.',
            type: 'success',
            confirmButtonText: 'Ok'
          });
        }
      }, (error) => {
        Swal.fire({
          title: 'Error',
          text: error,
          type: 'error',
          confirmButtonText: 'Ok'
        });
      });
    }

  }
  update_cover_img(event) {
    if (event.target.files) {
      var page_img = event.target.files[0];
      let formData = new FormData();
      const file_name = Date.now() + page_img.name;
      formData.append('file_name', file_name);
      formData.append('upload', page_img);
      formData.append('id', this._auth.currentUserValue.id);
      console.log(this._auth.currentUserValue.id);
      this._db.update_page_cover(formData).subscribe((res) => {
        if (res.status) {
          Swal.fire({
            title: 'Success',
            text: 'Page cover updated.',
            type: 'success',
            confirmButtonText: 'Ok'
          });
        }
      }, (error) => {
        Swal.fire({
          title: 'Error',
          text: error,
          type: 'error',
          confirmButtonText: 'Ok'
        });
      });
    }
  }

  update_artist_page() {
    if (this.page_form.name == '' || this.page_form.sub_title == '') {
      Swal.fire({
        title: 'Error',
        text: 'Fill in required fields first.',
        type: 'error',
        confirmButtonText: 'Ok'
      });
    } else {
      const data = {
        id: this._auth.currentUserValue.id,
        data: this.page_form
      };
      this._db.update_artist_page(data).subscribe((res) => {
        if (res.status) {
          this.update_artist_page_info();
          Swal.fire({
            title: 'Success',
            text: 'Page data updated.',
            type: 'success',
            confirmButtonText: 'Ok'
          });
        }
      },
        (error) => {
          Swal.fire({
            title: 'Error',
            text: error,
            type: 'error',
            confirmButtonText: 'Ok'
          });
        });
    }
  }

  ngOnInit() {
  }

}
