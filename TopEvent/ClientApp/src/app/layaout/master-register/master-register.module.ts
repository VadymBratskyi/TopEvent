import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRegisterRoutingModule } from './master-register-routing.module';
import { MasterRegisterComponent } from './master-register.component';

@NgModule({
  imports: [
    CommonModule,
    MasterRegisterRoutingModule
  ],
  declarations: [MasterRegisterComponent]
})
export class MasterRegisterModule { }
