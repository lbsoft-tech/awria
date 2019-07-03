import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  navLinks = [
    { path: 'user-portal/home/all', label: 'All posts' },
    { path: 'user-portal/home/patron', label: 'Awria-only posts' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
