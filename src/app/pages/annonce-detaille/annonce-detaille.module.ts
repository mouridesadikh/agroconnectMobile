import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnnonceDetaillePage } from './annonce-detaille.page';

const routes: Routes = [
  {
    path: '',
    component: AnnonceDetaillePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnnonceDetaillePage]
})
export class AnnonceDetaillePageModule {}
