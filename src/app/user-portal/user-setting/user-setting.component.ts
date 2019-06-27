import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {
  navLinks = [
    { path: 'user-portal/setting/profile', label: 'User Profile' },
    { path: 'user-portal/setting/email', label: 'Email Settings' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
