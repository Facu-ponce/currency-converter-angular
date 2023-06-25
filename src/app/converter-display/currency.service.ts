import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private readonly API_URL = 'https://api.apilayer.com/currency_data/list';
  private readonly CONVERT_API_URL = 'https://api.apilayer.com/currency_data/convert';
  private readonly API_KEY = 'gop01NYd5UJnid4RLAWqVZoMjqCI8WAA';

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

  getHistoricalData(date: string) {
    const headers = new HttpHeaders().set('apikey', this.API_KEY);
    const apiUrl = `https://api.apilayer.com/currency_data/historical?date=${date}`;

    return this.http.get(apiUrl, { headers });
  }
}
