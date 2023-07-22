import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/home/shared/error.service';
import { ExampleModel } from 'src/app/models/example.model';
import { WordModel } from 'src/app/models/word.model';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word-add',
  templateUrl: './word-add.component.html',
  styleUrls: ['./word-add.component.css']
})
export class WordAddComponent implements OnInit {
  wordModel:WordModel=new WordModel();
  examples:ExampleModel[]=[];
  constructor(
    private wordService: WordService,
    private errorService: ErrorService,
    private router:Router,
    private toastr:ToastrService
    ) {
  }


  ngOnInit(): void {

  }
  save(){
    this.wordService.add(this.wordModel).subscribe({
      next:()=>{
        this.toastr.success("Successfully added!","Save");
        this.router.navigateByUrl("/admin/word-add");
      },
      error:(err:Error)=>{
        this.errorService.errorHandler(err);
      }
    })
  }

}
