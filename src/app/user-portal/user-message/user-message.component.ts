import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss']
})
export class UserMessageComponent implements OnInit {
  navLinks = [
    {
      path: 'user-portal/message/profile/all',
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
