import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegosService} from '../../services/juegos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  juegos: any[] = [];
  nombre: string;
  constructor( private juegosService : JuegosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
) {  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.nombre = params['nombre'];
      this.juegosService.getBuscarJuegos( params[`nombre`]).subscribe((resp:any)=> {
        this.juegos= resp.results;
    });

    })
  
  }
  verJuego(idx: number ){
    this.router.navigate(['/juego', idx]);
  }
}
