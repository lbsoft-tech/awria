import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

export interface PeriodicElement {


  month: string;
  newPledge: number;
  increasedPledge: number;
  deletePledge: number;
  decreasedPledge: number;
  totalChange: number;
  endOfMonth: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { month: '04-05-2019', newPledge: 0.0, increasedPledge: 0.0, deletePledge: 0.0, decreasedPledge: 0.0, totalChange: 0.0, endOfMonth: 0.0 },

];

@Component({
  selector: 'app-artist-income-pledge-growth',
  templateUrl: './artist-income-pledge-growth.component.html',
  styleUrls: ['./artist-income-pledge-growth.component.scss']
})
export class ArtistIncomePledgeGrowthComponent implements OnInit {
  LineChart = [];
  displayedColumns: string[] = ['month', 'newPledge', 'increasedPledge', 'deletePledge', 'decreasedPledge', 'totalChange', 'endOfMonth'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"],
        datasets: [{
          label: "New and increased Pledges",
          data: [0, 9, 7, 5, 2, 6, 8, 2, 6, 7],

          fill: false,
          lineTension: 0.2,
          borderColor: "green",
          borderWidth: 1
        }, {
          label: "Deleted and Decreased Pledges",
          data: [0, 7, 7, 2, 4, 8, 9, 3, 8, 9],

          fill: false,
          lineTension: 0.2,
          borderColor: "red",
          borderWidth: 1.5
        },
        {
          label: "Amount Pledged at End of Month",
          data: [0, 4, 2, 9, 1, 7, 4, 6, 7, 4, 1, 8],

          fill: false,
          lineTension: 0.2,
          borderColor: "blue",
          borderWidth: 2
        }]
      },
      options: {
        title: {
          text: "Pledge Growth",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
    );

  }

}
