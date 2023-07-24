import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordUpdatePage } from './word-update.page';

const routes: Routes = [
  {
    path: '',
    component: WordUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordUpdatePageRoutingModule {}
