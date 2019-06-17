import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {
  MatCardModule, MatButtonModule, MatFormFieldModule,
  MatInputModule, MatIconModule, MatCheckboxModule,
  MatDatepickerModule
} from '@angular/material';
import { MasterRegisterRoutingModule } from './master-register-routing.module';
import { MasterRegisterComponent } from './master-register.component';


@NgModule({
  imports: [
    CommonModule,
    MasterRegisterRoutingModule,
    ReactiveFormsModule,
    /*material*/
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [MasterRegisterComponent]
})
export class MasterRegisterModule { }
