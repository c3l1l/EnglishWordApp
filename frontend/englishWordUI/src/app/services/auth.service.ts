import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AfterContentChecked {

  constructor(@Inject('apiUrl') private apiUrl:string,private http:HttpClient,private router:Router) { }
  ngAfterContentChecked(): void {
    this.isUserAuth();
  }
  ngOnInit(): void {

  }

  login(loginModel:any){
    return this.http.post(`${this.apiUrl}/auth/userLogin`,loginModel);
  }
  isUserAuth(){
    if(localStorage.getItem("token")) return true;

   // this.router.navigateByUrl("/login");
    return false;
  }
}
