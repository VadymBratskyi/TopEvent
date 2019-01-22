import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserService } from "../_services/user.services";
import { AuthenticationService } from "../_services/athentication.service";
import { UserRouterModule } from "./user.routing.module";

import {
  LoginComponent,
  RegisterComponent,
  UserListComponent,
  UserAddComponent,
  UserEditComponent
} from "./user.barel";

import {
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatProgressSpinnerModule
  } from "../materil.barel"

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserRouterModule,

    /*material app*/
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [UserService, AuthenticationService],
})
export class UserModule {

}
