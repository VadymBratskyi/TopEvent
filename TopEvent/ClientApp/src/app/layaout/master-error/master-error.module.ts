import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterErrorRoutingModule } from './master-error-routing.module';
import { MasterErrorComponent } from './master-error.component';

@NgModule({
  imports: [
    CommonModule,
    MasterErrorRoutingModule
  ],
  declarations: [MasterErrorComponent]
})
export class MasterErrorModule { }
