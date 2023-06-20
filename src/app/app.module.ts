import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataServices } from './data.services';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ConverterDisplayComponent } from './converter-display/converter-display.component';
import { LoginService } from './login/login.service';

const appRoutes:Routes=[
  {path:'login', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConverterDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataServices, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
