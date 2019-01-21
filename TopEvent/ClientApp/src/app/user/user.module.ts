import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserService } from "../_services/user.services";
import { AuthenticationService } from "../_services/athentication.service";

import {
  LoginComponent,
  RegisterComponent,
  UserRouterModule,
  UserManagerAddComponent,
  UserManagerComponent,
  UserManagerEditComponent
} from "./user.barel";

import {
  MatTableModule
  } from "../materil.barel"

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserManagerAddComponent,
    UserManagerComponent,
    UserManagerEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserRouterModule,

    MatTableModule
  ],
  providers: [UserService, AuthenticationService],
})
export class UserModule {

}
