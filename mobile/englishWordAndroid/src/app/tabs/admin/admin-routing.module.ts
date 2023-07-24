import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'word-add',
    loadChildren: () => import('./word-add/word-add.module').then( m => m.WordAddPageModule)
  },
  {
    path: 'word-update/:id',
    loadChildren: () => import('./word-update/word-update.module').then( m => m.WordUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
