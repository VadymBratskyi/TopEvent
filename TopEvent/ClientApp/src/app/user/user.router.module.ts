import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";

import { RegisterComponent } from "./regiseter/register.component";
import { LoginComponent } from "./login/login.component";

const router: Route[] = [
  {
    path: "user", children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class UserRouterModule { }
