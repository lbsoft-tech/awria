import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-membership',
  templateUrl: './my-membership.component.html',
  styleUrls: ['./my-membership.component.scss']
})
export class MyMembershipComponent implements OnInit {

  // active_item: any;
  // panelOpenState: boolean = false;

  navLinks = [
    { path: 'active-memberships', label: 'Active Memberships' },
    { path: 'billing-history', label: 'Billing History' },
    { path: 'payment-methods', label: 'Payment Methods' }
  ]

  constructor(
    private router :  Router
  ) { }

  ngOnInit() {
  }

  // clickactive() {
  //   this.panelOpenState = false;
  // }

  // membership() {
  //   this.panelOpenState = !this.panelOpenState;
  //   this.router.navigateByUrl('/my-membership/active-memberships');
  //   this.active_item = "Active Memberships";
  //   //  this.panelOpenState = !this.panelOpenState
  // }

  // billing() {
  //   this.panelOpenState = !this.panelOpenState;
  //   this.router.navigateByUrl('/my-membership/billing-history');
  //   this.active_item = "Billing History";
  //   //  this.panelOpenState = !this.panelOpenState
  // }

  // payment() {
  //   this.panelOpenState = !this.panelOpenState;
  //   this.router.navigateByUrl('/my-membership/payment-methods');
  //   this.active_item = "Payment Methods";
  //   //  this.panelOpenState = !this.panelOpenState
  // }
}
