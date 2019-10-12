import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListAnnoncePage } from './list-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: ListAnnoncePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListAnnoncePage]
})
export class ListAnnoncePageModule {}
