import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent implements OnInit {

  navLinks = [
    { path: 'artist-portal/edit/about', label: 'About' },
    { path: 'artist-portal/edit/tiers', label: 'Tiers' },
    { path: 'artist-portal/edit/goals', label: 'Goals' },
    { path: 'artist-portal/edit/thanks', label: 'Thanks' },
    { path: 'artist-portal/edit/paymentstabs', label: 'Payments' },
    { path: 'artist-portal/edit/poststab', label: 'Posts' },
    { path: 'artist-portal/edit/offers', label: 'Offers' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
