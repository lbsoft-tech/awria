import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-message',
  templateUrl: './artist-message.component.html',
  styleUrls: ['./artist-message.component.scss']
})
export class ArtistMessageComponent implements OnInit {

  navLinks = [
    {
      path: 'artist-portal/message/page/all',
      src: "../../../assets/images/profile-pic.png",
      name: 'MySketchLife',
      type: 'creator inbox',
      label: 'all'
    },
    {
      path: 'artist-portal/message/profile/all',
      src: "../../../assets/images/profile-pic.png",
      name: 'Smantha Nick',
      type: 'Personal inbox',
      label: 'all'
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
