import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  usuario:any = {
    usuario:'',
    password:''
  }

  constructor(private usuarioService:UsuarioService, private router:Router) { }



  login(form:NgForm){
    if(form.valid){
      this.usuarioService.login(form).subscribe(usuario => {
        localStorage.setItem('_id', usuario._id)
        console.log(this.usuarioService.sesionIniciada())
        this.router.navigateByUrl('/')
      })
    }else{
      return;
    }
  }
}
