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

  registro(form:NgForm){
    return this.http.post(`${this.back_url}/registro`, form.value)
  }

  login(form:NgForm){
    return this.http.post(`${this.back_url}/login`,form.value).pipe(map(data => data['usuario']))
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
