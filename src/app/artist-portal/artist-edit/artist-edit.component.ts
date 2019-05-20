import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor( private router: Router) { }

  ngOnInit() {
  }
    
    about()
    {  this.router.navigateByUrl('/artist-portal/edit/about')  }
    
    tiers()
    {  this.router.navigateByUrl('artist-portal/edit/tiers')  }
    
    goals()
    {  this.router.navigateByUrl('artist-portal/edit/goals')  }
    
    payments()
    {  this.router.navigateByUrl('artist-portal/edit/paymentstabs')  }
    
    posts()
    {  this.router.navigateByUrl('artist-portal/edit/poststab')  }
    
    offers()
    {  this.router.navigateByUrl('artist-portal/edit/offers')  }
    
    

}
