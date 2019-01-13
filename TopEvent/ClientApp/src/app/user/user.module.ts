import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserService } from "../_services/user.services";
import { AuthenticationService } from "../_services/athentication.service";

import {
  LoginComponent,
  RegisterComponent,
  UserRouterModule
} from "./user.barel";


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserRouterModule
  ],
  providers: [UserService, AuthenticationService],
})
export class UserModule {

}
