import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario:Usuario = {
    usuario:'',
    password:'',
    nickname:'',
    fechaNacimiento:null,
    email:'',
    seguidores:[],
    siguiendo:[],
    porJugar:[],
    jugando:[],
    jugados:[],
    favoritos:[]
  }

  constructor(private usuarioService:UsuarioService, private router:Router) { }


  registro(form:NgForm){
    if(form.valid){
      this.usuarioService.registro(form).subscribe(data => {
        this.router.navigateByUrl('/')
      })
    }else{
      return ;
    }
  }

}
