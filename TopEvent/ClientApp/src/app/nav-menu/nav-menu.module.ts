import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {
  NavMenuComponent,
  NavMenuMessageCardComponent,
  NavMenuNotificationsrCardComponent,
  NavMenuUserCardComponent,
  NavMenuNotificationItemComponent,
  NavMenuMessageItemComponent,
  SidenavProfileComponent,
  SidenavListComponent
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
  } from "../materil.barel";


@NgModule({
  declarations: [
    NavMenuComponent,
    NavMenuMessageCardComponent,
    NavMenuNotificationsrCardComponent,
    NavMenuUserCardComponent,
    NavMenuNotificationItemComponent,
    NavMenuMessageItemComponent,
    SidenavProfileComponent,
    SidenavListComponent
  ],
  imports: [ 
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,

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
