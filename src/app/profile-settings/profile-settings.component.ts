import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  navLinks = [
    { path: 'profile', label: 'User Profile' },
    { path: 'email', label: 'Email Settings' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
