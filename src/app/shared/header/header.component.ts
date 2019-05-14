import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

// tslint:disable-next-line: no-output-on-prefix
  @Output() onToggleSidenav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }

}
