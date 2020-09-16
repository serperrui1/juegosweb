import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  back_url = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  registro(form:NgForm){
    return this.http.post(`${this.back_url}/registro`, form.value)
  }
}
