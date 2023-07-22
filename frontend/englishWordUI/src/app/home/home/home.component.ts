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
  filterText:string="";
  constructor(private toastr:ToastrService,private wordService:WordService,private errorService:ErrorService){

  }
  ngOnInit(): void {
    this.getAllWords();

  }

  getAllWords(){
      this.wordService.getAll().subscribe({
        next:(res:any)=>{
            this.wordList=res.data;
            console.log("----");
            console.log(this.wordList[0].examples[0].statement);
        },
        error:(err)=>{
            this.errorService.errorHandler(err);
        }
      })
  }


}
