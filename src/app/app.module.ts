import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataServices } from './data.services';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ConverterDisplayComponent } from './converter-display/converter-display.component';
import { LoginService } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'converter', component:ConverterDisplayComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConverterDisplayComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [DataServices, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
