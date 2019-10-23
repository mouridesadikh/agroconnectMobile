import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MarcheVirtuelPage } from './marche-virtuel.page';

const routes: Routes = [
  {
    path: '',
    component: MarcheVirtuelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MarcheVirtuelPage]
})
export class MarcheVirtuelPageModule {}
