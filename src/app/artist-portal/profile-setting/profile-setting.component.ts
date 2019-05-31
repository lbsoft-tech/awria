import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss']
})
export class ProfileSettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navLinks = [
    { path: 'artist-portal/profile-setting/my-profile', label: 'My user profile' },
    { path: 'artist-portal/profile-setting/my-app', label: 'Apps' },
    { path: 'artist-portal/profile-setting/my-email', label: 'Email settings' },
  

  ];

}
