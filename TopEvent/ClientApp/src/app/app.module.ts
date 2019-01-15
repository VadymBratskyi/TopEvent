import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from "./_services/client.services";
import { AuthGuard } from "./_guards/auth.guard";

import {
  AppRouterModule,
  AppComponent,
  HomeComponent,
  CounterComponent,
  FetchDataComponent,

  UserModule,
  NavMenuModule
} from './app.barel';


@NgModule({
  declarations: [
    AppComponent,
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
    NavMenuModule
  ],
  providers: [ClientService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
