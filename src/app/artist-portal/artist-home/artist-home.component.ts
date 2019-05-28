import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-home',
  templateUrl: './artist-home.component.html',
  styleUrls: ['./artist-home.component.scss']
})
export class ArtistHomeComponent implements OnInit {

  
  navLinks = [
    { path: 'artist-portal/home/allpost', label: 'All posts' },
    { path: 'artist-portal/home/patrononlypost', label: 'Patron-only posts' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
