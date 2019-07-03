import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-message-profile',
  templateUrl: './user-message-profile.component.html',
  styleUrls: ['./user-message-profile.component.scss']
})
export class UserMessageProfileComponent implements OnInit {
<<<<<<< HEAD

=======
>>>>>>> 1dbb997e0ed2f3e153d193b3c79f89feb4aa002c
  navLinks = [
    { path: 'user-portal/message/profile/all', label: 'All' },
    { path: 'user-portal/message/profile/read', label: 'Read' },
    { path: 'user-portal/message/profile/unread', label: 'Unread' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
