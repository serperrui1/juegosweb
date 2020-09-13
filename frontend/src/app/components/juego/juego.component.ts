import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuegosService} from '../../services/juegos.service';
import {  HttpClient } from '@angular/common/http';
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  id: number;
  juego:any;
  stores:any[]=[];
  generos:any[]=[];
  developers:any[]=[];
  publishers:any[]=[];
  youtube:SafeResourceUrl;
  imagen:SafeResourceUrl;
  redditurl:string;


  constructor(private activatedRoute: ActivatedRoute,
    private juegosService : JuegosService,
    private sanitazer: DomSanitizer,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];

    this.juegosService.getJuego(this.id).subscribe((resp:any)=> {
      this.juego= resp;
      this.stores = resp.stores;
      this.developers = resp.developers
      this.publishers = resp.publishers
      this.imagen = this.sanitazer.bypassSecurityTrustResourceUrl(resp.background_image)
      this.redditurl = resp.reddit_url;
      this.youtube = this.sanitazer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + resp.clip.video);
      this.generos = resp.genres
      console.log(this.juego)

      
  });
    
    });
  }

}
