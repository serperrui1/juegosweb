import { Juego } from './juego';
export interface Usuario{
    usuario:string,
    password:string,
    nickname:string,
    email:string,
    fechaNacimiento:Date,
    seguidores:Usuario[],
    siguiendo:Usuario[],
    porJugar:Juego[],
    jugando:Juego[],
    jugados:Juego[],
    favoritos:Juego[]
}