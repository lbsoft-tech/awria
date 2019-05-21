import { Component, OnInit } from '@angular/core';
import{Router}from "@angular/router";
@Component({
  selector: 'app-artist-settings',
  templateUrl: './artist-settings.component.html',
  styleUrls: ['./artist-settings.component.scss']
})
export class ArtistSettingsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  navLinks = [
    { path: 'artist-portal/setting/setting-account', label: 'Account' },
    { path: 'artist-portal/setting/setting-team', label: 'Team' },
    { path: 'artist-portal/setting/setting-apps', label: 'Apps' },
    { path:'artist-portal/setting/setting-email-setting', label: 'Your Email Settings' }

  ];
  account(){

  }
  team(){

  }
  apps(){

  }
  emailSettings(){

  }
}
