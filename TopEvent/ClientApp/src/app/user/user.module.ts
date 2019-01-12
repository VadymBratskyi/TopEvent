import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  LoginComponent,
  RegisterComponent,
  UserRouterModule
} from "./user.barel";
import { UserService } from "../_services/user.services";

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
  providers: [UserService],
})
export class UserModule {

}
