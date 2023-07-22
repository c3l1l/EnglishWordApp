import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WordService } from './services/word.service';
import { WordModel } from './models/word.model';
import { ErrorService } from '../shared/error.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wordList:WordModel[]=[];
  constructor(private toastr:ToastrService,private wordService:WordService,private errorService:ErrorService){

  }
  ngOnInit(): void {
    this.getAllWords();
    this.toastr.success("Test message","Title test",);
  }

  getAllWords(){
      this.wordService.getAll().subscribe({
        next:(res:any)=>{
            this.wordList=res.data;
            console.log(this.wordList);
        },
        error:(err)=>{
            this.errorService.errorHandler(err);
        }
      })
  }


}
