import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './layaout/master/master.module#MasterModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'error',
    loadChildren: './layaout/master-error/master-error.module#MasterErrorModule',
  },
  {
    path: 'login',
    loadChildren: './layaout/master-login/master-login.module#MasterLoginModule',
  },
  {
    path: 'register',
    loadChildren: './layaout/master-register/master-register.module#MasterRegisterModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
