import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordsPage } from './words.page';

const routes: Routes = [
  {
    path: '',
    component: WordsPage
  },
  {
    path: 'example-modal',
    loadChildren: () => import('./example-modal/example-modal.module').then( m => m.ExampleModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordsPageRoutingModule {}
