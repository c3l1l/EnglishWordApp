import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExampleModalPage } from './example-modal/example-modal.page';
import { WordService } from 'src/app/services/word.service';
import { WordModel } from 'src/app/models/word.model';
import { ErrorService } from 'src/app/services/error.service';
import { ExampleModel } from 'src/app/models/example.model';

@Component({
  selector: 'app-words',
  templateUrl: './words.page.html',
  styleUrls: ['./words.page.scss'],
})
export class WordsPage implements OnInit {

  wordList:WordModel[]=[];
   errorList:string[]=[];
   filterText:string="";

  constructor(
    private modalController:ModalController,
    private wordService:WordService,
    private errorService:ErrorService
    ) { }

  ngOnInit() {
    this.getAll();

  }

  getAll(){
    this.wordService.getAll().subscribe({
      next:(res:any)=>{
        this.wordList=res.data;
        console.log(res.data);
      },
      error:(err:any)=>{
        this.errorService.errorHandler(err.errors);
      }
    })
  }

  async presentModal(examples:ExampleModel[]) {
    const modal = await this.modalController.create({
      component: ExampleModalPage,
      cssClass: 'my-custom-class',
      componentProps:{
        'exampleItems':examples
      }
    });
    return await modal.present();
  }

}
