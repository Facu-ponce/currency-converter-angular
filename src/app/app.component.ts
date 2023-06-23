import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'currency-converter';

  constructor(private LoginService:LoginService){

  }

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

  accsesLogin(){
    return this.LoginService.accsesLogin();
  }

  logout(){

    this.LoginService.logout();
  }

}
