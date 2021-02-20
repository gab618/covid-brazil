import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { Covid } from './covid.interfaces';
import { CovidService } from './covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
})
export class CovidComponent implements OnInit {
  covidData: Covid;
  infectedLabels;
  infectedData;
  deceasedLabels;
  deceasedData;

  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    },
  };
  pieChartLabels: Label[];
  pieChartData: number[];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [pluginDataLabels];
  pieChartColors = [
    {
      backgroundColor: [
        'rgba(255,0,0,0.3)',
        'rgba(0,255,0,0.3)',
        'rgba(0,0,255,0.3)',
        'rgba(230, 194, 41,0.3)',
        'rgba(241, 113, 5,0.3)',
        'rgba(209, 17, 73,0.3)',
        'rgba(102, 16, 242,0.3)',
        'rgba(26, 143, 2270.3)',
        'rgba(252, 221, 242,0.3)',
        'rgba(56, 77, 72,0.3)',
        'rgba(110, 114, 113,0.3)',
        'rgba(119, 118, 188,0.3)',
        'rgba(110, 13, 37,0.3)',
        'rgba(255, 255, 179,0.3)',
        'rgba(69, 123, 157,0.3)',
        'rgba(32, 138, 174,0.3)',
        'rgba(241, 81, 86,0.3)',
        'rgba(233, 255, 249,0.3)',
      ],
    },
  ];

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.getCovidData();
  }

  getCovidData() {
    this.covidService.getCovidData().subscribe((response) => {
      this.covidData = response;
      this.infectedLabels = this.covidData.infectedByRegion.map(
        (item) => item.state
      );
      this.infectedData = this.covidData.infectedByRegion.map(
        (item) => item.count
      );
      this.deceasedLabels = this.covidData.deceasedByRegion.map(
        (item) => item.state
      );
      this.deceasedData = this.covidData.deceasedByRegion.map(
        (item) => item.count
      );
      this.setChartToInfected();
    });
  }

  setChartToInfected() {
    this.pieChartLabels = this.infectedLabels;
    this.pieChartData = this.infectedData;
  }

  setChartToDeceased() {
    this.pieChartLabels = this.deceasedLabels;
    this.pieChartData = this.deceasedData;
  }
}
