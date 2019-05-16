import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  
})
export class EditComponent implements OnInit {
  navLinks = [
    { path: 'edit/about', label: 'About' },
    { path: 'edit/tiers', label: 'Tiers' },
    { path: 'edit/goals', label: 'Goals' },
    { path: 'edit/thanks', label: 'Thanks' },
    { path: 'edit/paymentstabs', label: 'Payments' },
    { path: 'edit/poststab', label: 'Posts' },
    { path: 'edit/offers', label: 'Offers' },
   
  ];

  constructor(
    private router: Router
  ) { 
   
  }

  ngOnInit() {
  }
  


}
