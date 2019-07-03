<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
>>>>>>> 1dbb997e0ed2f3e153d193b3c79f89feb4aa002c

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {

<<<<<<< HEAD
=======
  @Input() title: string;
>>>>>>> 1dbb997e0ed2f3e153d193b3c79f89feb4aa002c
  constructor() { }

  ngOnInit() {
  }

}
