import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordAddPageRoutingModule } from './word-add-routing.module';

import { WordAddPage } from './word-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordAddPageRoutingModule
  ],
  declarations: [WordAddPage]
})
export class WordAddPageModule {}
