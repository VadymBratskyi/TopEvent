import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterLoginRoutingModule } from './master-login-routing.module';
import { MasterLoginComponent } from './master-login.component';

@NgModule({
  imports: [
    CommonModule,
    MasterLoginRoutingModule
  ],
  declarations: [MasterLoginComponent]
})
export class MasterLoginModule { }
