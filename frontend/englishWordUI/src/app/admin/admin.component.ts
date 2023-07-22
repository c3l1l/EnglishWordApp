import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/word.service';
import { WordModel } from '../models/word.model';
import { ErrorService } from '../home/shared/error.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  wordList: WordModel[] = [];
  filterText: string = "";

  constructor(
    private wordService: WordService,
    private errorService: ErrorService,
    private toastr:ToastrService
    ) {

  }

  ngOnInit(): void {
    this.getAllWords();
  }
  getAllWords() {
    this.wordService.getAll().subscribe({
      next: (res: any) => {
        this.wordList = res.data;
      },
      error: (err) => {
        this.errorService.errorHandler(err);
      }
    })
  }
  delete(id:number){
    console.log(id);
    this.wordService.delete(id).subscribe({
      next:(res:any)=>{
        this.toastr.success("Item successfully deleted !");
        this.getAllWords();
      },
      error:(err:Error)=>{
        this.errorService.errorHandler(err);
      }
    })
  }

}
