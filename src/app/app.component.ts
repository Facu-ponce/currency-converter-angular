import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-converter';

  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: "AIzaSyBdwtxIxmo9B0DtSNHA8YaPll-kZaybMXs",
      authDomain: "currency-converter-8432a.firebaseapp.com",
      databaseURL: "https://currency-converter-8432a-default-rtdb.firebaseio.com",
      projectId: "currency-converter-8432a",
      storageBucket: "currency-converter-8432a.appspot.com",
      messagingSenderId: "221920066854",
      appId: "1:221920066854:web:10135bbc922cd3ad8955e7",
      measurementId: "G-TNL8Q3NBS5"
    });
  }
}
