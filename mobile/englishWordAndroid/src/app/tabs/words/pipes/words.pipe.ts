import { Pipe, PipeTransform } from '@angular/core';
import { WordModel } from 'src/app/models/word.model';

@Pipe({
  name: 'wordsPipe'
})
export class WordsPipe implements PipeTransform {

  transform(value: WordModel[], filterText:string): WordModel[] {

    if(filterText!=='' || filterText !== undefined){
      return value.filter(w=>w.expression.toLowerCase().includes(filterText.toLowerCase()));
    }
    return value;
  }

}
