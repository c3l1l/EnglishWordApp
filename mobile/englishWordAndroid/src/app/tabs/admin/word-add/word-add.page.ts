import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { WordAddModel } from 'src/app/models/word-add.model';
import { ErrorService } from 'src/app/services/error.service';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word-add',
  templateUrl: './word-add.page.html',
  styleUrls: ['./word-add.page.scss'],
})
export class WordAddPage implements OnInit {

  wordAddModel:WordAddModel=new WordAddModel();
  constructor(
    private wordService:WordService,
    private errorService:ErrorService,
    private toastController:ToastController
  ) { }

  ngOnInit() {
  }

  save(){
    this.wordService.save(this.wordAddModel).subscribe({
      next:(res:any)=>{
        if(res.statusCode==200){
          this.presentToast("New word successfully added!");
        }
        else{
          this.errorService.errorHandler(res.errors);
        }
      }
    })
  }
  async presentToast(_message: string) {
    const toast = await this.toastController.create({
      message: _message,
      duration: 1000,
    });
    toast.present();
  }
}
