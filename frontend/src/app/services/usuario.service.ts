import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  back_url = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  registro(usuario){
    return this.http.post(`${this.back_url}/registro`, usuario)
  }

  checkUsuario(usuario:string){
    return this.http.get(`${this.back_url}/registro/checkUsuario/${usuario}`).pipe(map(data => data['num']))
  }

  checkNickname(nickname:string){
    return this.http.get(`${this.back_url}/registro/checkNickname/${nickname}`).pipe(map(data => data['num']))
  }

  checkEmail(email:string){
    return this.http.get(`${this.back_url}/registro/checkEmail/${email}`).pipe(map(data => data['num']))
  }

  login(data){
    return this.http.post(`${this.back_url}/login`,data)
  }

  logout(){
    localStorage.removeItem('_id')
  }

  sesionIniciada(){
    if(localStorage.getItem('_id')){
      return true
    }else{
      return false
    }
  }
}
