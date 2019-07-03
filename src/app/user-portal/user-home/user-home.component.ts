import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
<<<<<<< HEAD

  navLinks = [
    { path: 'user-portal/home/all', label: 'All posts' },
    { path: 'user-portal/home/patron', label: 'Patron-only posts' },
=======
  navLinks = [
    { path: 'user-portal/home/all', label: 'All posts' },
    { path: 'user-portal/home/patron', label: 'Awria-only posts' },
>>>>>>> 1dbb997e0ed2f3e153d193b3c79f89feb4aa002c
  ];
  constructor() { }

  ngOnInit() {
  }

}
