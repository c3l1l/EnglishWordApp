import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
{
  path:'',redirectTo:'home',pathMatch:'full'
},
  {
   path:'home',component:LayoutComponent,
   children:[
   {path:'',component:HomeComponent}
   ]
  },
  {
    path:'**',component:NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
