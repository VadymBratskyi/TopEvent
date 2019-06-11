import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from "./_services/client.services";
import { AuthGuard } from "./_guards/auth.guard";
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
    AppRouterModule,
  ],
  providers: [ClientService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
