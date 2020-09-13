import { Routes, RouterModule } from '@angular/router';
import { NgModule, Input } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { JuegoComponent } from './components/juego/juego.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'juego/:id', component: JuegoComponent },

    { path: '**', pathMatch: 'full', redirectTo: '' }
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
    initialNavigation: 'enabled'
});
