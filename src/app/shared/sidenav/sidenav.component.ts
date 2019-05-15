import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  tiles = [
    {text: 'forum', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'edit', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'settings', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
