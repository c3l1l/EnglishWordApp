import { Injectable, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements OnInit {

  constructor(private toastController:ToastController) { }
  ngOnInit(): void {
  }
  errorHandler(err:string[]){
    err.forEach(element => {
        this.presentToast(element);
        console.log(element);
    });
  }
  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
    });
    toast.present();
  }
}
