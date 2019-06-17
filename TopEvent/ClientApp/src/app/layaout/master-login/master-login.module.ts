import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatFormFieldModule, 
  MatInputModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { MasterLoginRoutingModule } from './master-login-routing.module';
import { MasterLoginComponent } from './master-login.component';



@NgModule({
  imports: [
    CommonModule,
    MasterLoginRoutingModule,    
    ReactiveFormsModule,
    /*material*/
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule
  ],
  declarations: [MasterLoginComponent]
})
export class MasterLoginModule { }
