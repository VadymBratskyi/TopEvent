import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterRegisterComponent } from './master-register.component';

const routes: Routes = [
  {
    path: '',
    component: MasterRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRegisterRoutingModule { }
