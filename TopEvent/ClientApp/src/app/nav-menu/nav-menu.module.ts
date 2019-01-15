import { NgModule } from '@angular/core';
import { NavMenuComponent } from "./nav-menu.component";
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatMenuModule,
  MatBadgeModule
  } from "../mteril.brel";


@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [ 
    RouterModule,

    /*materil modules*/
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    MatBadgeModule
  ],
  exports: [NavMenuComponent]
})
export class NavMenuModule { }
