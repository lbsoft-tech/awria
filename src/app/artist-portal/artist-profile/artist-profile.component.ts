import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.scss']
})
export class ArtistProfileComponent implements OnInit {
  navLinks = [
    { path: 'artist-portal/profile/user-profile', label: 'User Profile' },
    { path: 'artist-portal/profile/email-settings', label: 'Email Settings' },
    { path: 'artist-portal/profile/overview', label: 'Overview' },
    { path: 'artist-portal/profile/posts', label: 'Posts' },
  ];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  overview() {
    this.router.navigateByUrl('/artist-portal/profile/overview')
  }

  posts() {
    this.router.navigateByUrl('/artist-portal/profile/posts')
  }

}
