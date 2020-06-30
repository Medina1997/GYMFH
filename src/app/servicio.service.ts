import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(public httpClient: HttpClient) { }

  getJson(url:string){
    return this.httpClient.get(url);
  }
}
