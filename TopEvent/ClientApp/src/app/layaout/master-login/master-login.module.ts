import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterLoginRoutingModule } from './master-login-routing.module';
import { MasterLoginComponent } from './master-login.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MasterLoginRoutingModule,
    /*material*/
    MatCardModule
  ],
  declarations: [MasterLoginComponent]
})
export class MasterLoginModule { }
