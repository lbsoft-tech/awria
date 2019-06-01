import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;

  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', weight: 1.0079, symbol: 'not friendly and annoying ' },
  { name: 'Helium', weight: 4.0026, symbol: 'He' },
  { name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { name: 'Boron', weight: 10.811, symbol: 'B' },
  { name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-artist-patrons-blocked-users',
  templateUrl: './artist-patrons-blocked-users.component.html',
  styleUrls: ['./artist-patrons-blocked-users.component.scss']
})
export class ArtistPatronsBlockedUsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
