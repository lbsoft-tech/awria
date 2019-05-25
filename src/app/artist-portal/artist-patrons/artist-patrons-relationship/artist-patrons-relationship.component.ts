import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatSort } from '@angular/material';

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-artist-patrons-relationship',
  templateUrl: './artist-patrons-relationship.component.html',
  styleUrls: ['./artist-patrons-relationship.component.scss']
})
export class ArtistPatronsRelationshipComponent implements OnInit {

  search: string;
  textarea: string;
  textarea_flag: any;
  pledge_flag: any;



  toppings = new FormControl();
  toppingList: string[] = ['Active patrons', 'Declined patrons', 'Former patrons', 'Followers'];

  optionsSelect: Array<any>;
  disabled: boolean = true;
  disOptionsSelect: Array<any>;


  //table
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
    this.disOptionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Disabled option', disabled: true },
    ];

    this.textarea_flag = false;

    //table
    this.dataSource.sort = this.sort;

    //pledge_flag
    this.pledge_flag = false;

  }

  resetSearch() {
    this.search = '';
  }

  cancel() {
    this.textarea = '';
    this.textarea_flag = false;

  }

  aca(a) {
    if (this.textarea != '') {
      this.textarea_flag = true;
    }
    else {
      this.textarea_flag = false;
    }

  }

  pledge() {
    if (this.pledge_flag) {
      this.pledge_flag = false
    }
    else if (!this.pledge_flag) {
      this.pledge_flag = true;
    }

    console.log('asdadad');
  }

}
