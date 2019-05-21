import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-settings',
  templateUrl: './artist-settings.component.html',
  styleUrls: ['./artist-settings.component.scss']
})
export class ArtistSettingsComponent implements OnInit {

  navLinks = [
    { path: 'artist-portal/settings/about', label: 'About' },
    { path: 'artist-portal/settings/team', label: 'Team' },
    { path: 'artist-portal/settings/email', label: 'Email' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
