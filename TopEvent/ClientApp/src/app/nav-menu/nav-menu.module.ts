import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
  NavMenuComponent,
  NavMenuMessageCardComponent,
  NavMenuNotificationsrCardComponent,
  NavMenuUserCardComponent,
  NavMenuNotificationItemComponent,
  NavMenuMessageItemComponent
  } from "./nav-menu.barel";

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatMenuModule,
  MatBadgeModule,
  MatCardModule,
  MatExpansionModule
  } from "../mteril.brel";


@NgModule({
  declarations: [
    NavMenuComponent,
    NavMenuMessageCardComponent,
    NavMenuNotificationsrCardComponent,
    NavMenuUserCardComponent,
    NavMenuNotificationItemComponent,
    NavMenuMessageItemComponent
  ],
  imports: [ 
    RouterModule,
    BrowserModule,

    /*materil modules*/
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [NavMenuComponent]
})
export class NavMenuModule { }
