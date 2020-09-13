import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Juego } from '../models/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http: HttpClient) {  }

  getJuegos() {
      return this.http.get('https://api.rawg.io/api/games');
  }

  getJuego(id:number) {
    return this.http.get('https://api.rawg.io/api/games/'+id );
  }
}
