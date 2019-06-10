import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-income-payout-taxform',
  templateUrl: './artist-income-payout-taxform.component.html',
  styleUrls: ['./artist-income-payout-taxform.component.scss']
})
export class ArtistIncomePayoutTaxformComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToPayment() {
    this.router.navigate(['/artist-portal/income/payout']);
  }
}
