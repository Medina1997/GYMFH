import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpClient: HttpClient) { }

  sendMessage(body) {
    return this.httpClient.post('http://localhost:3000/formulario', body);
    }
    consulta(url: string) {
      return this.httpClient.get(url);
    }
}
