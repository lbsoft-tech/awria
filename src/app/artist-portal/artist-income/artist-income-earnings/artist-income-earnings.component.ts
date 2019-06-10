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
  selector: 'app-artist-income-earnings',
  templateUrl: './artist-income-earnings.component.html',
  styleUrls: ['./artist-income-earnings.component.scss']
})
export class ArtistIncomeEarningsComponent implements OnInit {

  LineChart = [];
  displayedColumns: string[] = ['month', 'newPledge', 'increasedPledge', 'deletePledge', 'decreasedPledge', 'totalChange', 'endOfMonth'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {

    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ["jan", "feb"],
        datasets: [{
          label: "graph",
          data: [0, 0.01],

          fill: false,
          lineTension: 0.2,
          borderColor: "green",
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Pledge Growth",
          display: false
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
