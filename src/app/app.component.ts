import { Component } from '@angular/core';
import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-converter';

  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: "AIzaSyBdwtxIxmo9B0DtSNHA8YaPll-kZaybMXs"
    });
  }
}
