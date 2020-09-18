import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  form:FormGroup
  passwordIncorrecta:boolean

  constructor(private usuarioService:UsuarioService, private router:Router, private builder:FormBuilder) { 
    this.iniciarFormulario()
    this.passwordIncorrecta = false
  }

  iniciarFormulario(){
    this.form = this.builder.group({
      usuario:['', [Validators.required], [this.existeUsuario]],
      password:['', [Validators.required]]
    })
  }

  //Validaciones síncronas
  get usuarioNoValido(){
    return this.usuarioRequerido || this.usuarioIncorrecto
  }
  get usuarioRequerido(){
    return this.form.get('usuario').errors?.required && this.form.get('usuario').touched
  }
  get usuarioIncorrecto(){
    return this.form.get('usuario').errors?.existe
  }
  get passwordNoValido(){
    return this.form.get('password').invalid && this.form.get('password').touched
  }
  

  //Validaciones asíncronas
  existeUsuario = (control:FormControl):Promise<any> | Observable<any> => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        this.usuarioService.checkUsuario(control.value).subscribe(num => {
        if(num == 0){
          resolve({existe:true})
        }else{
          resolve(null)
        }
        })
      }, 1500);
    })
  }

  login(){
    console.log(this.form)
    if(this.form.invalid){
      this.form.markAllAsTouched()
    }else{
      this.usuarioService.login(this.form.value).subscribe(data => {
        const exito = data['success']
        if(exito){
          const usuario = data['encontrado']
          localStorage.setItem('_id', usuario._id)
          this.router.navigateByUrl('/')
        }else{
          this.passwordIncorrecta = true
        }
      })
    }
  }
}
