import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService:AuthService,
    private toastr:ToastrService,
    private router:Router
    ){

  }

  ngOnInit(): void {
  }


  login(loginForm:NgForm){
      console.log(loginForm.value);
      this.authService.login(loginForm.value).subscribe({
        next:(res:any)=>{
          let token=res.data.token;
          console.log(res.data);
          this.toastr.success("Login is successfull, redirecting ....");
          localStorage.setItem("token",token);
          this.router.navigateByUrl("admin");
        },
        error:(err:Error)=>{
            console.log(err);
        }
      })
  }
}
