import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { RolesListComponent } from './list/roles-list.component';
import { AddRoleDialogComponent } from './add/add-role-dialog.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import {
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '../../../barels/materil.barel';

@NgModule({
  declarations: [
    RolesComponent,
    RolesListComponent,
    AddRoleDialogComponent,
    UserRolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    /*material*/
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  entryComponents: [AddRoleDialogComponent],
})
export class RolesModule { }
