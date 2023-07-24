import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordUpdatePageRoutingModule } from './word-update-routing.module';

import { WordUpdatePage } from './word-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordUpdatePageRoutingModule
  ],
  declarations: [WordUpdatePage]
})
export class WordUpdatePageModule {}
