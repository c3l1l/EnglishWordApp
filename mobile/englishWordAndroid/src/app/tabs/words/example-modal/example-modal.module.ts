import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExampleModalPageRoutingModule } from './example-modal-routing.module';

import { ExampleModalPage } from './example-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExampleModalPageRoutingModule
  ],
  declarations: [ExampleModalPage]
})
export class ExampleModalPageModule {}
