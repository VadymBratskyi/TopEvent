import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

const router: Route[] = [
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
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRouterModule { }
