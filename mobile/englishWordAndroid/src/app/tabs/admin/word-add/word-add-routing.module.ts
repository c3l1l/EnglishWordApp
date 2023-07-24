import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordAddPage } from './word-add.page';

const routes: Routes = [
  {
    path: '',
    component: WordAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordAddPageRoutingModule {}
