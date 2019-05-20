import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-message-page',
  templateUrl: './artist-message-page.component.html',
  styleUrls: ['./artist-message-page.component.scss']
})
export class ArtistMessagePageComponent implements OnInit {
  navLinks = [
    { path: 'artist-portal/message/page/all', label: 'All' },
    { path: 'artist-portal/message/page/read', label: 'Read' },
    { path: 'artist-portal/message/page/unread', label: 'Unread' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
