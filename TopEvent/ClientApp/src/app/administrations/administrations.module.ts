import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationsRoutingModule } from './administrations-routing.module';
import { AdministrationsComponent } from './administrations.component';

@NgModule({
  declarations: [AdministrationsComponent],
  imports: [
    CommonModule,
    AdministrationsRoutingModule
  ]
})
export class AdministrationsModule { }
