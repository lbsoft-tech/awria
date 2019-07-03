import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-profile-btn',
  templateUrl: './header-profile-btn.component.html',
  styleUrls: ['./header-profile-btn.component.scss']
})
export class HeaderProfileBtnComponent implements OnInit {

  profile_img = '';
  profile_img_default = '../../../assets/images/posts/icon-camera.png';
  constructor(private authenticationService: AuthService, private router: Router) {
    this.profile_img = this.profile_img_default;
    this.authenticationService.currentUserProfile.subscribe((profile) => {
      if (profile && profile.profile_photo) {
        this.profile_img = 'http://localhost:3000/static/uploads/' + this.authenticationService.currentUserValue.id + '/profile_pictures/' + profile.profile_photo;
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
