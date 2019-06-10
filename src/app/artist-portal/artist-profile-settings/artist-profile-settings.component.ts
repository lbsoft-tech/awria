import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-profile-settings',
  templateUrl: './artist-profile-settings.component.html',
  styleUrls: ['./artist-profile-settings.component.scss']
})
export class ArtistProfileSettingsComponent implements OnInit {

  navLinks = [
    { path: 'artist-portal/profile-settings/my-profile', label: 'User Profile' },
    { path: 'artist-portal/profile-settings/my-email', label: 'Email Settings' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  overview() {
    this.router.navigateByUrl('/artist-portal/profile/overview')
  }

  posts() {
    this.router.navigateByUrl('/artist-portal/profile/posts')
  }

}
