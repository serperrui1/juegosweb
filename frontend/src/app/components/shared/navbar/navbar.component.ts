import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { JuegosService } from '../../../services/juegos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class NavbarComponent implements OnInit {
  options = [];
  myControl = new FormControl();
  busqueda:string;
  filteredOptions :Observable<string[]>
  constructor( public usuarioService:UsuarioService, 
    private router:Router,
    public juegosService:JuegosService ) { 
      this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
    map(val => val.length >= 1 ? this._filter(val): []  )
    );
    }

  ngOnInit(): void {
    
    
  }

  private _filter(value:string): string[]{
  const filterValue = value.toLowerCase();
  return this.options.filter(option =>
     option.name.toLowerCase().includes(filterValue));
  }

  displayFn(subject){
    return subject? subject.name : undefined;
  }

  logout(){
    this.usuarioService.logout()
    this.router.navigateByUrl('/')
  }

  escribirBuscador( s:string ){
    this.juegosService.getBuscarJuegos(s).subscribe((resp:any)=> {
      this.options= resp.results;
      console.log(this.options);
  });
  }
  buscar( nombre:string ){
    this.router.navigate( ['/juegos',nombre] );
  }
 }
