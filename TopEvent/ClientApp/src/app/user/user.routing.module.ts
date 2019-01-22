import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from '../_guards/auth.guard';
import {
  LoginComponent,
  RegisterComponent,
  UserListComponent,
  UserAddComponent,
  UserEditComponent
} from "./user.barel";


const router: Route[] = [
  {
    path: "users",
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'list', component: UserListComponent, canActivate: [AuthGuard] },
      { path: 'create', component: UserAddComponent, canActivate: [AuthGuard] },
      { path: 'edit/:userId', component: UserEditComponent, canActivate: [AuthGuard] }
    ]
  }  
];


@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class UserRouterModule { }
