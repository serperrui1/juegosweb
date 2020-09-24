import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { JuegoComponent } from './components/juego/juego.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'juego/:id', component: JuegoComponent },
    { path: 'juegos/:nombre', component: JuegosComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
    initialNavigation: 'enabled'
});
