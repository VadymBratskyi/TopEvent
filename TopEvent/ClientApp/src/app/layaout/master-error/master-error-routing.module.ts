import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterErrorComponent } from './master-error.component';

const routes: Routes = [
  {
    path: '',
    component: MasterErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterErrorRoutingModule { }
