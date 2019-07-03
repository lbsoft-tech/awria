import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/user/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  tiles = [
    { text: 'forum', cols: 1, rows: 1, color: 'lightblue', route: 'message/page/all' },
    { text: 'edit', cols: 1, rows: 1, color: 'lightgreen', route: 'edit/about' },
    { text: 'settings', cols: 1, rows: 1, color: 'lightpink', route: 'setting/setting-account' },
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  profile_image = '';
  profile_image_default = '../../../assets/images/posts/icon-camera.png';
  user: Observable<User>;

  constructor(private _auth: AuthService,
    private router:Router) {
    this.profile_image = this.profile_image_default;
    this.user = this._auth.currentUser;
    this.user.subscribe();
    this._auth.currentUserProfile.subscribe((profile) => {
      if(profile && profile.profile_photo)
      {
        this.profile_image = 'http://localhost:3000/static/uploads/' + this._auth.currentUserValue.id + '/profile_pictures/' + profile.profile_photo;
      }
    });
  }

  ngOnInit() {
    var toggler = document.getElementsByClassName('caret-reciept');
    var i;
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', function () {
        this.parentElement.querySelector('.nested-reciept-list').classList.toggle('active-reciept-list');
      });
    }
  }
  PostNew(){
    
  }

}
