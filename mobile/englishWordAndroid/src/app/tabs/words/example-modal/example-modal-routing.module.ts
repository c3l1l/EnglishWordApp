import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleModalPage } from './example-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleModalPageRoutingModule {}
