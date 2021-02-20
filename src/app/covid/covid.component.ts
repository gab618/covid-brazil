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
  covidLabels;
  covidInfecteds;

  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
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
      console.log(this.covidData);
      this.pieChartLabels = this.covidData.infectedByRegion.map(
        (item) => item.state
      );
      this.pieChartData = this.covidData.infectedByRegion.map(
        (item) => item.count
      );
      console.log(this.pieChartLabels);
      console.log(this.pieChartData);
      // this.pieChartLabels =
    });
  }
}
