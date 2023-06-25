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
import { LogoutComponent } from './logout/logout.component';
import { LoginGuardian } from './login/login-guardian';
import { ChartComponent } from './chart/chart.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'converter', component:ConverterDisplayComponent, canActivate:[LoginGuardian]},
  {path:'**', component:LogoutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConverterDisplayComponent,
    HomeComponent,
    LogoutComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [DataServices, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
