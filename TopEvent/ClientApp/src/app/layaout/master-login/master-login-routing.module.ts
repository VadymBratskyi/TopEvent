import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterLoginComponent } from './master-login.component';

const routes: Routes = [
  {
    path: '',
    component: MasterLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterLoginRoutingModule { }
