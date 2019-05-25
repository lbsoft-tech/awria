import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-message-profile',
  templateUrl: './artist-message-profile.component.html',
  styleUrls: ['./artist-message-profile.component.scss']
})
export class ArtistMessageProfileComponent implements OnInit {

  navLinks = [
    { path: 'artist-portal/message/profile/all', label: 'All' },
    { path: 'artist-portal/message/profile/read', label: 'Read' },
    { path: 'artist-portal/message/profile/unread', label: 'Unread' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
