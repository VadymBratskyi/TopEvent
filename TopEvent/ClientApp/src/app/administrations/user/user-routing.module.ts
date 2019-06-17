import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './list/user-list.component';
import { UserAddComponent } from './add/user-add.component';
import { UserEditComponent } from './edit/user-edit.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: UserListComponent
      },     
      {
        path: 'create',
        component: UserAddComponent
      },
      {
        path: 'edit/:userId',
        component: UserEditComponent
      },
      {
        path: 'changepassword/:userId',
        component: ChangePasswordComponent
      },
      {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then(r => r.RolesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
