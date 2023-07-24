import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginModel:LoginModel=new LoginModel();
  constructor(
    private authService:AuthService,
    private errorService:ErrorService,
    private router:Router
   ) { }

  ngOnInit() {
  }


  login()
  {
 this.authService.login(this.loginModel).subscribe({
  next:(res:any)=>{
    if(res.statusCode==200){
      localStorage.setItem("token",res.data.token);
      this.router.navigateByUrl("admin");
  //  console.log(res.data.token);
    }
    if(res.statusCode==401)
    this.errorService.errorHandler(res.errors);

  },
    error:(err:Error)=>{
      console.log(err);
      //this.errorService.errorHandler(err.message);
    }
 });
  }

}
