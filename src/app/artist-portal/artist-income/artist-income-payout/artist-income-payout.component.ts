import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-income-payout',
  templateUrl: './artist-income-payout.component.html',
  styleUrls: ['./artist-income-payout.component.scss']
})
export class ArtistIncomePayoutComponent implements OnInit {

  constructor(private route: Router) { }

ngOnInit() {
}

taxForm() {
  this.route.navigate(['/artist-portal/income/payout/tax-form']);
}

}
