import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user:string='';
  password:string='';
  constructor(private loginService:LoginService) {

  }
  ngOnInit(): void{

  }

  login(user:string, password:string){
    const email=user;
    const loginpassword=password;
    this.loginService.login(email, loginpassword);
  }
  makeRequest(){

  }

}
