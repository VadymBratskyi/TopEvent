import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,    
    FormsModule,
    HttpClientModule,
    AppRouterModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
