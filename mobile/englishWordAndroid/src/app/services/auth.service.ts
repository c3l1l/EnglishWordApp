import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,@Inject('apiUrl') private apiUrl:string) { }

  login(loginModel:LoginModel){
     return this.http.post(`${this.apiUrl}/Auth/UserLogin`,loginModel);
  }
  isCheckAuth(){
    if(localStorage.getItem("token")){
      return true;
    }

    return false;
  }


}
