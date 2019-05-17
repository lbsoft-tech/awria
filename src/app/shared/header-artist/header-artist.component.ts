import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-artist',
  templateUrl: './header-artist.component.html',
  styleUrls: ['./header-artist.component.scss']
})
export class HeaderArtistComponent implements OnInit {

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
