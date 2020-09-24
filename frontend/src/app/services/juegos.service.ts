import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Juego } from '../models/juego';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http: HttpClient) {  }

  getJuegos() {
      return this.http.get('https://api.rawg.io/api/games');
  }

  getBuscarJuegos(juego: string) {
    return this.http.get('https://api.rawg.io/api/games?search=' + juego);
}

  getJuego(id:number) {
    return this.http.get('https://api.rawg.io/api/games/'+id );
  }
}
