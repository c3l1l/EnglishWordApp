import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public authService:AuthService,private router:Router) {}

logout(){
  localStorage.clear();
  this.router.navigateByUrl("");
}

}
