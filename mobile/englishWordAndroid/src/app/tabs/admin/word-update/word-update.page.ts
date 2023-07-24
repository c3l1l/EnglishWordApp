import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { WordModel } from 'src/app/models/word.model';
import { ErrorService } from 'src/app/services/error.service';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word-update',
  templateUrl: './word-update.page.html',
  styleUrls: ['./word-update.page.scss'],
})
export class WordUpdatePage implements OnInit {

  id:number=0;
  wordModel:WordModel=new WordModel();
  constructor(
    private activatedRoute:ActivatedRoute,
    private wordService:WordService,
    private errorService:ErrorService,
    private router:Router,
    private toastController:ToastController
    ) {
    this.id=Number(this.activatedRoute.snapshot.paramMap.get("id"));
   }

  ngOnInit() {
    this.getById(this.id);
  }
  getById(id:number){
      this.wordService.getById(id).subscribe({
        next:(res:any)=>{
          if(res.statusCode==200){
            this.wordModel=res.data;
          }
          else {
            this.errorService.errorHandler(res.errors);
          }
        }
      })
  }
  update(){
      this.wordService.update(this.wordModel).subscribe({
        next:(res:any)=>{
          if(res.statusCode==200){
              this.presentToast("Word successfully updated !");
              this.router.navigate(["admin"]);
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
