import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { WordUpdateComponent } from './admin/word-update/word-update.component';
import { WordAddComponent } from './admin/word-add/word-add.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'admin', component: LayoutComponent,
    children:[
      {path:'',component:AdminComponent},
      {path:'word-update/:id',component:WordUpdateComponent},
      {path:'word-add',component:WordAddComponent}
    ]
  },
  {
    path: 'home', component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },

  {
    path: '**', component: NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
