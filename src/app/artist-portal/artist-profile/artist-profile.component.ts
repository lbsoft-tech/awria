import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.scss']
})
export class ArtistProfileComponent implements OnInit {
  navLinks = [
    { path: 'artist-portal/profile/user-profile', label: 'User Profile' },
    { path: 'artist-portal/profile/email-settings', label: 'Email Settings' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
