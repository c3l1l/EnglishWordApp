import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WordsPageRoutingModule } from './words-routing.module';

import { WordsPage } from './words.page';
import { WordsPipe } from './pipes/words.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordsPageRoutingModule
  ],
  declarations: [WordsPage, WordsPipe]
})
export class WordsPageModule {}
