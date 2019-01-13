import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from "./_services/client.services";
import { AuthGuard } from "./_guards/auth.guard";

import {
  AppRouterModule,
  AppComponent,
  NavMenuComponent,
  HomeComponent,
  CounterComponent,
  FetchDataComponent,

  UserModule
} from './app.barel';

import {
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
  } from "./mteril.brel";


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRouterModule,

    /*app modules*/
    UserModule,

    /*materil modules*/
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [ClientService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
