import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr:ToastrService) { }

  errorHandler(err:any){
    this.toastr.error(err.message,"ERROR !");
    console.log(err.message);

  }
}
