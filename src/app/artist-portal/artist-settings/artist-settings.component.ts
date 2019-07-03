import { Component, OnInit } from '@angular/core';
import{Router}from "@angular/router";
@Component({
  selector: 'app-artist-settings',
  templateUrl: './artist-settings.component.html',
  styleUrls: ['./artist-settings.component.scss']
})
export class ArtistSettingsComponent implements OnInit {
  panelOpenState:boolean=false;
  active_item;
  constructor(private router:Router) { }

  ngOnInit() {
    this.active_item='Account'
  }
  navLinks = [
    { path: 'artist-portal/setting/setting-account', label: 'Account' },
    { path: 'artist-portal/setting/setting-team', label: 'Team' },
    { path: 'artist-portal/setting/setting-apps', label: 'Apps' },
    { path:'artist-portal/setting/setting-email-setting', label: 'Your Email Settings' }

  ];
  account(){
this.panelOpenState=!this.panelOpenState;
this.router.navigateByUrl('/artist-portal/setting/setting-account');
this.active_item='Account';
  }
  team(){
    this.panelOpenState=!this.panelOpenState;
    this.router.navigateByUrl('/artist-portal/setting/setting-team');
    this.active_item='Team';
  }
  apps(){
    this.panelOpenState=!this.panelOpenState;
    this.router.navigateByUrl('/artist-portal/setting/setting-apps');
    this.active_item='Apps';
  }
  emailSettings(){
    this.panelOpenState=!this.panelOpenState;
    this.router.navigateByUrl('/artist-portal/setting/setting-email-setting');
    this.active_item='Your Email Settings';
  }
  clickactive() {
    this.panelOpenState = false;
  }
}
