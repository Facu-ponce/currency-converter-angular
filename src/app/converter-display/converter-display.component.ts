import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-converter-display',
  templateUrl: './converter-display.component.html',
  styleUrls: ['./converter-display.component.scss']
})
export class ConverterDisplayComponent implements OnInit {
  currencyArray:any;
  from='';
  to='';
  fromCurrency: any;
  toCurrency: any;

  constructor(private currencyService:CurrencyService) {
  }

  ngOnInit(){
    this.currencyService.getCurrencyData().subscribe(list=>{
      this.currencyArray = this.convertObjectToArray(list.currencies);
      console.log(this.currencyArray);
    })
  }

  private convertObjectToArray(obj: { [key: string]: string }): { code: string, name: string }[] {
    return Object.keys(obj).map(key => ({ code: key, name: obj[key] }));
  }

  convertCurrency(from: string, to: string, fromCurrency: any, toCurrency: any){
    //console.log(from, to);
    //console.log(fromCurrency, toCurrency);
    //TODO:callConvertService
  };
  onSelectCurrency(event: any){
    //console.log(event);
    //TODO:updateDropDownSelection
  };

}
