import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../../../../_services/user.services";
import { ChangeRole } from "../../../../barels/models.barel";
import { NgForm, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {

  roleForm: FormGroup;
  changeRole: ChangeRole;
  checked = true;
  roles: FormArray;

  constructor(
    private servUser: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
    
    this.roleForm = formBuilder.group({
      roles: this.formBuilder.array([])
    });

    this.roles = <FormArray>this.roleForm.get('roles');

  }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(rout => {
      let userId = rout.get("userId");
      if (userId) {
        this.loadData(userId);
      }
    });
  }

  onChange(selectRole: any) {
    
    if (selectRole.checked) {
      this.roles.push(new FormControl(selectRole.source.value));
    } else {
      const index = this.roles.controls.findIndex(x => x.value === selectRole.source.value);
      this.roles.removeAt(index);
    }    
  }

  chackedRole(roleName: string) {
    if (roleName) {
      const index = this.roles.controls.findIndex(x => x.value === roleName);
      if (index >= 0) {
        return true;
      }
    }
    return false;
  }

  loadData(userId: string) {
    this.servUser.getUserEditRoles(userId).subscribe((data: ChangeRole) => {
      this.changeRole = data;
      if (this.changeRole.userRoles.length > 0) {
        this.changeRole.userRoles.forEach(rol => {
          this.roles.push(new FormControl(rol));
        });
      }
    });
  }

  onSave() {
    if (this.roleForm.value.roles && this.roleForm.value.roles.length > 0) {
      this.changeRole.userRoles = this.roleForm.value.roles;     
      this.servUser.serRolesForUser(this.changeRole).subscribe(rez => {
        this.router.navigate(["/administrations","users"]);
      });
    }   
  }
  
  onFormSubmit(form: NgForm) {
    console.log(form);
  } 
}
