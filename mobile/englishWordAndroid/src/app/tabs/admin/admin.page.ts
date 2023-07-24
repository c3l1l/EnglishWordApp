import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordModel } from 'src/app/models/word.model';
import { ErrorService } from 'src/app/services/error.service';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  wordList:WordModel[]=[];
  constructor(
    private wordService:WordService,
    private router:Router,
    private errorService:ErrorService
  ) { }

  ngOnInit() {
    this.wordService.getAll().subscribe({
      next:(res:any)=>{
        this.wordList=res.data;
      },
      error:(error:any)=>{
          this.errorService.errorHandler(error.errorHandler(error.message));
      }
    })
  }


}
