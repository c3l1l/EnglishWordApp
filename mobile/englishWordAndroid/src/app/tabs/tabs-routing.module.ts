import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthService } from '../services/auth.service';

const routes: Routes = [
{
  path:'', component:TabsPage,
  children:[
    {
      path:'', redirectTo:'words', pathMatch:'full'

    },
    {
      path: 'words',
      loadChildren: () => import('../tabs/words/words.module').then( m => m.WordsPageModule)
    },
    {
      path: 'admin',
      canActivate:[()=>inject(AuthService).isCheckAuth()],
      loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule),

    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    }
  ]
},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
