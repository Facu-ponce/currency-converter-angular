import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CurrencyService } from '../converter-display/currency.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {

  rates=[]
  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    const date = '2023-05-24';

    this.currencyService.getHistoricalData(date).subscribe(
      data => {

        console.log('HistoricalData:', data);
      }

    );
  }

  private convertObjectToArray(obj: { [key: string]: string }): { code: string, name: string }[] {
    return Object.keys(obj).map(key => ({ code: key, name: obj[key] }));
  }
}

