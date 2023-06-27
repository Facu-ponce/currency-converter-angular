import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private readonly API_URL = 'https://api.apilayer.com/currency_data/list';
  private readonly CONVERT_API_URL = 'https://api.apilayer.com/currency_data/convert';
  private readonly API_KEY = '25zYDIMy1DUxUH4R32tctXLufFsabSUv';

  constructor(private http: HttpClient) { }

  getCurrencyData(): Observable<any> {
    const headers = new HttpHeaders().append('apikey', this.API_KEY);
    const requestOptions = {
      headers: headers
    };

    return this.http.get(this.API_URL, requestOptions);
  }

  convertCurrency(to: string, from: string, amount: string): Observable<any> {
    const url = `${this.CONVERT_API_URL}?to=${to}&from=${from}&amount=${amount}`;
    const headers = new HttpHeaders().append('apikey', this.API_KEY);
    const requestOptions = {
      headers: headers
    };

    return this.http.get(url, requestOptions);
  }

  getHistoricalData(date: string,currencies: any) {
    const headers = new HttpHeaders().set('apikey', this.API_KEY);
    const apiUrl = `https://api.apilayer.com/currency_data/historical?date=${date}&currencies=${currencies}`;

    return this.http.get(apiUrl, { headers });
  }
}
