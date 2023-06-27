import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-converter-display',
  templateUrl: './converter-display.component.html',
  styleUrls: ['./converter-display.component.scss']
})

export class ConverterDisplayComponent implements OnInit {
  currencyArray: any;
  fromAmount: string = '0';
  toAmount: string = '0';
  fromCurrency: any;
  toCurrency: any;

  historicalValues: any;
  quotesInfo: any;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.currencyService.getCurrencyData().subscribe(list => {
      this.currencyArray = this.convertObjectToArray(list.currencies);
      console.log(this.currencyArray);
    })
  }

  private convertObjectToArray(obj: { [key: string]: string }): { code: string, name: string }[] {
    return Object.keys(obj).map(key => ({ code: key, name: obj[key] }));
  }

  convertCurrency(from: string, to: string, fromCurrency: any, toCurrency: any) {
    this.currencyService.convertCurrency(this.toCurrency, this.fromCurrency, this.fromAmount).subscribe(result => {
      console.log(result);
      this.toAmount = result.result;
    });

    const today = new Date();
    const pastDate = this.getPastDate() 
    const formattedDate = this.formatDate(pastDate);
    const currencies = this.fromCurrency;
    this.currencyService.getHistoricalData(formattedDate, currencies).subscribe(
      data => {
        this.historicalValues = data;
        this.quotesInfo = this.historicalValues.quotes;
        console.log('HistoricalData:', this.quotesInfo);
      }
    );
  }

  formatDate(date: Date): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  getPastDate(): Date {
    const today = new Date();
    const pastDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    return pastDate;
  }

  onSelectCurrency(event: any) {
    //console.log(event);
  };

}
