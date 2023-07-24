import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController, ViewWillEnter } from '@ionic/angular';
import { WordModel } from 'src/app/models/word.model';
import { ErrorService } from 'src/app/services/error.service';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements ViewWillEnter {

  wordList: WordModel[] = [];
  id: number = 0;
  constructor(
    private wordService: WordService,
    private router: Router,
    private errorService: ErrorService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    this.id = Number(activatedRoute.snapshot.paramMap.get("id"));
  }
  ionViewWillEnter(): void {
this.getAll()
  }


  // ngOnInit() {
  //   this.getAll();
  // }
  getAll() {
    this.wordService.getAll().subscribe({
      next: (res: any) => {
        this.wordList = res.data;
      },
      error: (error: any) => {
        this.errorService.errorHandler(error.errorHandler(error.message));
      }
    })
  }
  delete(id: number) {
    console.log(id);
  }

  async deleteConfirm(id: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: `Do you want to delete item id:${id}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Delete Permanently',
          handler: () => {
            this.wordService.delete(id).subscribe({
              next: (res: any) => {
                if (res.statusCode == 200) {
                  this.presentToast("Word successfully deleted !");
                  this.getAll();
                }

                else
                  this.errorService.errorHandler(res.errors);
              },
              error: (err: any) => {
                this.errorService.errorHandler(err.message);
              }
            })
          },
        },
      ],
    });

    await alert.present();
  }
  async presentToast(_message: string) {
    const toast = await this.toastController.create({
      message: _message,
      duration: 1000,
    });
    toast.present();
  }

}
