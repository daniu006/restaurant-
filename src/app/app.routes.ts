import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./page/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./page/menu/menu.page').then( m => m.MenuPage)
  },
    {
    path: '',
    redirectTo: 'contactos',
    pathMatch: 'full',
  },
   {
    path: 'inicio',
    loadComponent: () => import('./page/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'contactos',
    loadComponent: () => import('./page/contactos/contactos.page').then( m => m.ContactosPage)
  },
  
];
