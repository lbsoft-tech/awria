import { Component, OnInit } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-artist-profile-overview',
  templateUrl: './artist-profile-overview.component.html',
  styleUrls: ['./artist-profile-overview.component.scss']
})
export class ArtistProfileOverviewComponent implements OnInit {

  Page_Subject: Subject<any>;
  Page_Observable: Observable<any>;

  constructor(private _db: DatabaseService) {
    this.Page_Subject = new BehaviorSubject<any>({
      about: 'Not available',
      name: 'Not available'
    });
    this.Page_Observable = this.Page_Subject.asObservable();
    this.update_page_info();
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
  ngOnInit() {
  }

}
