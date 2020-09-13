import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-tarjeta',
  templateUrl: './juego-tarjeta.component.html',
  styleUrls: ['./juego-tarjeta.component.css']
})
export class JuegoTarjetaComponent implements OnInit {
  @Input() juego: any ={};
  @Input() id: number;

  @Output() juegoSeleccionado: EventEmitter<number>;
  constructor(private router: Router) { 
    this.juegoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  verJuego(){
    this.juegoSeleccionado.emit(this.id);
 
  }


}
