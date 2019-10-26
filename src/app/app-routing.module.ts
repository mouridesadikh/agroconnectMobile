import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'list-annonce', loadChildren: './list-annonce/list-annonce.module#ListAnnoncePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'singin', loadChildren: './pages/singin/singin.module#SinginPageModule' },
  { path: 'marche-virtuel', loadChildren: './pages/marche-virtuel/marche-virtuel.module#MarcheVirtuelPageModule' },
  { path: 'cooperative', loadChildren: './pages/cooperative/cooperative.module#CooperativePageModule' },
  { path: 'service-digi', loadChildren: './pages/service-digi/service-digi.module#ServiceDigiPageModule' },
  { path: 'meteo', loadChildren: './pages/meteo/meteo.module#MeteoPageModule' },
  { path: 'conseil', loadChildren: './pages/conseil/conseil.module#ConseilPageModule' },
  { path: 'annonce-detaille', loadChildren: './pages/annonce-detaille/annonce-detaille.module#AnnonceDetaillePageModule' },  { path: 'service-page', loadChildren: './pages/service-page/service-page.module#ServicePagePageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
