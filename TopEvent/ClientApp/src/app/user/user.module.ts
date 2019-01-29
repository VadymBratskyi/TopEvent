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
  UserEditComponent,
  ChangePasswordComponent,
  RolesListComponent,
  UserRolesComponent,
  AddRoleDialogComponent
} from "./user.barel";

import {
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatCardModule,
  MatCheckboxModule,
  MatListModule
  } from "../materil.barel"

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    ChangePasswordComponent,
    RolesListComponent,
    UserRolesComponent,
    AddRoleDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserRouterModule,
    MatDialogModule,

    /*material app*/
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule
  ],
  entryComponents: [AddRoleDialogComponent, RolesListComponent],
  providers: [UserService, AuthenticationService],
})
export class UserModule {

}
