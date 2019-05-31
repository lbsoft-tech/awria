import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-edit-tiers',
  templateUrl: './artist-edit-tiers.component.html',
  styleUrls: ['./artist-edit-tiers.component.scss']
})
export class ArtistEditTiersComponent implements OnInit {

  upgradflag = false;

  navLinks = [
    { path: 'artist-portal/edit/tiers/your-tiers', label: 'Your Tiers' },
    { path: 'artist-portal/edit/tiers/best-practices', label: 'Best Practices' },

  ];
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  upgrade()
  {
    this.upgradflag = true;
    this.router.navigateByUrl('artist-portal/edit/tiers/your-tiers')
    console.log("upgrade")
  }
}
