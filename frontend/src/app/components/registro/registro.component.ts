import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  form:FormGroup
  
  constructor(private usuarioService:UsuarioService, private router:Router, private builder:FormBuilder) { 
    this.iniciarFormulario()
  }

  iniciarFormulario(){
    this.form = this.builder.group({
      usuario:['', [Validators.required, Validators.minLength(6)], [this.existeUsuario]],
      password:['', [Validators.required, Validators.minLength(6)]],
      nickname:['', [Validators.required, Validators.minLength(4)], [this.existeNickname]],
      email:['', [Validators.required, Validators.email], [this.existeEmail]],
      fechaNacimiento:['', [Validators.required, this.fechaAnteriorAHoy]],
    })
  }

  //Validaciones síncronas
  get usuarioNoValido(){
    return this.form.get('usuario').invalid && this.form.get('usuario').touched
  }
  get passwordNoValido(){
    return this.form.get('password').invalid && this.form.get('password').touched
  }
  get nicknameNoValido(){
    return this.form.get('nickname').invalid && this.form.get('nickname').touched
  }
  get emailNoValido(){
    return this.form.get('email').invalid && this.form.get('email').touched
  }
  get fechaNacimientoNoValido(){
    return this.form.get('fechaNacimiento').invalid && this.form.get('fechaNacimiento').touched
  }

  //Validaciones asíncronas
  existeUsuario = (control:FormControl):Promise<any> | Observable<any> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.usuarioService.checkUsuario(control.value).subscribe(num => {
        if(num > 0){
          resolve({existe:true})
        }else{
          resolve(null)
        }
        })
      }, 1500);
    })
  }

  existeNickname = (control:FormControl):Promise<any> | Observable<any> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.usuarioService.checkNickname(control.value).subscribe(num => {
        if(num > 0){
          resolve({existe:true})
        }else{
          resolve(null)
        }
        })
      }, 1500);
    })
  }

  existeEmail = (control:FormControl):Promise<any> | Observable<any> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.usuarioService.checkEmail(control.value).subscribe(num => {
        if(num > 0){
          resolve({existe:true})
        }else{
          resolve(null)
        }
        })
      }, 1500);
    })
  }


  //Validaciones personalizadas
  private fechaAnteriorAHoy(control:FormControl):{[s:string]:boolean}{
    let fecha = Date.parse(control.value)
    let hoy = new Date().getTime()
    if(fecha > hoy){
      return {
        fechaAnteriorAHoy:true
      }
    }
    return null
  }


  registro(){
    if(this.form.invalid){
      this.form.markAllAsTouched()
    }else{
        this.usuarioService.registro(this.form.value).subscribe(data => {
        this.router.navigateByUrl('/login')
      })
    }
  }

  
}
