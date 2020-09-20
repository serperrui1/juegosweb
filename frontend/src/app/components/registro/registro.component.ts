import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  form:FormGroup
  
  constructor(private usuarioService:UsuarioService, private router:Router, private builder:FormBuilder, private toastr:ToastrService) { 
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
    return this.usuarioRequerido || this.usuarioExiste || this.usuarioMinLength
  }
  get usuarioRequerido(){
    return this.form.get('usuario').errors?.required && this.form.get('usuario').touched
  }
  get usuarioMinLength(){
    return this.form.get('usuario').errors?.minlength && this.form.get('usuario').touched
  }
  get usuarioExiste(){
    return this.form.get('usuario').errors?.existe
  }

  get passwordNoValido(){
    return this.passwordRequerido || this.passwordMinLength
  }
  get passwordRequerido(){
    return this.form.get('password').errors?.required && this.form.get('password').touched
  }
  get passwordMinLength(){
    return this.form.get('password').errors?.minlength && this.form.get('password').touched
  }

  get nicknameNoValido(){
    return this.nicknameRequerido || this.nicknameExiste || this.nicknameMinLength
  }
  get nicknameRequerido(){
    return this.form.get('nickname').errors?.required && this.form.get('nickname').touched
  }
  get nicknameMinLength(){
    return this.form.get('nickname').errors?.minlength && this.form.get('nickname').touched
  }
  get nicknameExiste(){
    return this.form.get('nickname').errors?.existe
  }

  get emailNoValido(){
    return this.emailRequerido || this.emailExiste || this.emailEmail
  }
  get emailRequerido(){
    return this.form.get('email').errors?.required && this.form.get('email').touched
  }
  get emailEmail(){
    return this.form.get('email').errors?.email && this.form.get('email').touched
  }
  get emailExiste(){
    return this.form.get('email').errors?.existe
  }

  get fechaNacimientoNoValido(){
    return this.fechaNacimientoRequerido || this.fechaNacimientoFechaAnteriorAHoy
  }
  get fechaNacimientoRequerido(){
    return this.form.get('fechaNacimiento').errors?.required && this.form.get('fechaNacimiento').touched
  }
  get fechaNacimientoFechaAnteriorAHoy(){
    return this.form.get('fechaNacimiento').errors?.fechaAnteriorAHoy && this.form.get('fechaNacimiento').touched
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
        const exito = data['success']
        if(exito){
          this.router.navigateByUrl('/login')
          this.toastr.success('Registrado con éxito')
        }else{
          return ;
        }
      })
    }
  }

  
}
