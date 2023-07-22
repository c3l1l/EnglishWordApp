import { Component, Input, OnInit } from '@angular/core';
import { WordModel } from '../../models/word.model';
import { ExampleModel } from '../../models/example.model';

@Component({
  selector: 'app-examples-modal',
  templateUrl: './examples-modal.component.html',
  styleUrls: ['./examples-modal.component.css']
})
export class ExamplesModalComponent  implements OnInit {
  @Input() word:WordModel=new WordModel();
ngOnInit(): void {
  //console.log(this.word);
}

}
