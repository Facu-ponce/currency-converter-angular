import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmailValidator } from "@angular/forms";

@Injectable()
export class DataServices{
  constructor(private httpClient:HttpClient){

  }
}
