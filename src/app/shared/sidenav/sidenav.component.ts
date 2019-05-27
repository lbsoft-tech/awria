import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  tiles = [
    {text: 'forum', cols: 1, rows: 1, color: 'lightblue', route: 'message/page/all'},
    { text: 'edit', cols: 1, rows: 1, color: 'lightgreen', route: 'edit/about'},
    { text: 'setting', cols: 1, rows: 1, color: 'lightpink', route: 'setting/setting-account'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
    var toggler = document.getElementsByClassName('caret-reciept');
    var i;
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', function () {
        this.parentElement.querySelector('.nested-reciept-list').classList.toggle('active-reciept-list');
      });
    }
  }

}
