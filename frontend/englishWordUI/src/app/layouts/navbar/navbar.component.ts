import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public authService:AuthService){

  }
  isActive(url:string){
    return location.pathname==url;
  }
  logOut(){
    localStorage.removeItem("token");
    }
}
