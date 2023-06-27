import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js/auto';
import { CurrencyService } from '../converter-display/currency.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {

  @Input() historicalData = [];
  
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Currency' },
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
  };
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  constructor() { }

  ngOnInit() {
    console.log('data for chart is:',this.historicalData);
  }
}

