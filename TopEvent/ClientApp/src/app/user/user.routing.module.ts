import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { AuthGuard } from '../_guards/auth.guard';
import {
  LoginComponent,
  RegisterComponent,
  UserListComponent,
  UserAddComponent,
  UserEditComponent,
  ChangePasswordComponent,
  RolesListComponent,
  UserRolesComponent
} from "./user.barel";


const router: Route[] = [
  {
    path: "users",
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'list', component: UserListComponent, canActivate: [AuthGuard] },
      { path: 'create', component: UserAddComponent, canActivate: [AuthGuard] },
      { path: 'edit/:userId', component: UserEditComponent, canActivate: [AuthGuard] },
      { path: 'changepassword/:userId', component: ChangePasswordComponent, canActivate: [AuthGuard] },
      { path: 'roles', children: [
          { path: "list", component: RolesListComponent, canActivate: [AuthGuard] }
        ]
      },
      { path: 'roles/:userId', component: UserRolesComponent, canActivate: [AuthGuard] }
   ] 
  }
];


@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class UserRouterModule { }
