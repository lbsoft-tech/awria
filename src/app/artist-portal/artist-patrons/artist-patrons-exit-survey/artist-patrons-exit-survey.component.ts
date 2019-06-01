import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  date: string;

  PledgeAmount: number;
  Reasons: string;
  Feedback: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { date: 'Hydrogen', PledgeAmount: 1.0079, Reasons: 'not friendly and annoying ', Feedback: 'Okay but not okay' },
  { date: 'Helium', PledgeAmount: 4.0026, Reasons: 'He', Feedback: 'Okay but not okay' },
  { date: 'Lithium', PledgeAmount: 6.941, Reasons: 'Li', Feedback: 'Okay but not okay' },
  { date: 'Beryllium', PledgeAmount: 9.0122, Reasons: 'Be', Feedback: 'Okay but not okay' },
  { date: 'Boron', PledgeAmount: 10.811, Reasons: 'B', Feedback: 'Okay but not okay' },
  { date: 'Carbon', PledgeAmount: 12.0107, Reasons: 'C', Feedback: 'Okay but not okay' },
  { date: 'Nitrogen', PledgeAmount: 14.0067, Reasons: 'N', Feedback: 'Okay but not okay' },
  { date: 'Oxygen', PledgeAmount: 15.9994, Reasons: 'O', Feedback: 'Okay but not okay' },
  { date: 'Fluorine', PledgeAmount: 18.9984, Reasons: 'F', Feedback: 'Okay but not okay' },
  { date: 'Neon', PledgeAmount: 20.1797, Reasons: 'Ne', Feedback: 'Okay but not okay' },
];


@Component({
  selector: 'app-artist-patrons-exit-survey',
  templateUrl: './artist-patrons-exit-survey.component.html',
  styleUrls: ['./artist-patrons-exit-survey.component.scss']
})

export class ArtistPatronsExitSurveyComponent implements OnInit {
  displayedColumns: string[] = ['date', 'PledgeAmount', 'Reasons', 'Feedback'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
