import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegosService} from '../../services/juegos.service';
import { Juego } from '../../models/juego';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  juegos: any[] = [];
  termino: string;

  constructor(private juegosService : JuegosService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {


     }

  ngOnInit(): void {
    this.juegosService.getJuegos().subscribe((resp:any)=> {
      this.juegos= resp.results;
      console.log(this.juegos);
  });
  }
  verJuego(idx: number ){
    this.router.navigate(['/juego', idx]);
  }
}
