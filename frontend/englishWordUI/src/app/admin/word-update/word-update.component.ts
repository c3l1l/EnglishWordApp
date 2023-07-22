import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/home/shared/error.service';
import { ExampleModel } from 'src/app/models/example.model';
import { WordModel } from 'src/app/models/word.model';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word-update',
  templateUrl: './word-update.component.html',
  styleUrls: ['./word-update.component.css']
})
export class WordUpdateComponent implements OnInit {

  wordModel:WordModel=new WordModel();
  examples:any[]=[];
  id:number=0;
  constructor(
    private wordService: WordService,
    private errorService: ErrorService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastr:ToastrService
    ) {
   this.id= Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.getById();
  }
  getById(){
    this.wordService.getById(this.id).subscribe({
      next:(res:any)=>{
          this.wordModel=res.data;
          this.examples=this.wordModel.examples;
          console.log(this.wordModel.examples);
      },
      error:(err:Error)=>{
        this.errorService.errorHandler(err.message);
      }
    })
  }
  update(){
    this.wordService.update(this.wordModel).subscribe({
      next:(res:any)=>{
        this.toastr.success("Word Updated Succesfully","Update");
        this.router.navigateByUrl("/admin");
      },
      error:(err:Error)=>{
        this.errorService.errorHandler(err);
      }
    })
  }
  add(){
    this.wordService.add(this.wordModel).subscribe({
      next:(res:any)=>{
        this.toastr.success("Word Added Succesfully","Add");
        this.router.navigateByUrl("/admin");
      },
      error:(err:Error)=>{
        this.errorService.errorHandler(err);

      }
    })
  }
}
