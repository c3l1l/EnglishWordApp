import { Pipe, PipeTransform } from '@angular/core';
import { WordModel } from '../models/word.model';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(wordList: WordModel[], filterText:string): WordModel[] {

    if(filterText !=="" || filterText !== undefined)
   return wordList.filter(x=>x.expression.toLowerCase().includes(filterText.toLocaleLowerCase()));

   return wordList;
  }

}
