import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent implements OnInit {

  active_item: any;
  panelOpenState: boolean = false;

  navLinks = [
    { path: 'artist-portal/edit/about', label: 'About' },
    { path: 'artist-portal/edit/tiers', label: 'Tiers' },
    { path: 'artist-portal/edit/goals', label: 'Goals' },
    { path: 'artist-portal/edit/thanks', label: 'Thanks' },
    { path: 'artist-portal/edit/paymentstabs', label: 'Payments' },
    { path: 'artist-portal/edit/poststab', label: 'Posts' },
    { path: 'artist-portal/edit/offers', label: 'Offers' },
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    this.active_item = "About";
  }

  clickactive() {
    this.panelOpenState = false;
  }

  about() {
    this.panelOpenState = !this.panelOpenState;
    this.router.navigateByUrl('/artist-portal/edit/about');
    this.active_item = "About";
    //  this.panelOpenState = !this.panelOpenState
  }

  tiers() {
    this.router.navigateByUrl('artist-portal/edit/tiers')
    this.active_item = "Tiers";
    this.panelOpenState = !this.panelOpenState;
  }

  goals() {
    this.router.navigateByUrl('artist-portal/edit/goals')
    this.active_item = "Goals";
    this.panelOpenState = !this.panelOpenState;
  }

  thanks() {
    this.router.navigateByUrl('artist-portal/edit/thanks')
    this.active_item = "Thanks";
    this.panelOpenState = !this.panelOpenState;
  }

  payments() {
    this.router.navigateByUrl('artist-portal/edit/paymentstabs')
    this.active_item = "Payments";
    this.panelOpenState = !this.panelOpenState;
  }

  posts() {
    this.router.navigateByUrl('artist-portal/edit/poststab')
    this.active_item = "Posts";
    this.panelOpenState = !this.panelOpenState;
  }

  offers() {
    this.router.navigateByUrl('artist-portal/edit/offers')
    this.active_item = "Offers";
    this.panelOpenState = !this.panelOpenState;
  }


}
