import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../../../_services/user.services";
import { ChangeRole } from "../../../models.barel";
import { NgForm, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  roleForm: FormGroup;
  changeRole: ChangeRole;

  constructor(
    private servUser: UserService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
    
    this.roleForm = formBuilder.group({
      roles: this.formBuilder.array([])
    });

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

    console.log(selectRole);

    const roles = <FormArray>this.roleForm.get('roles') as FormArray;

    if (selectRole.checked) {
      roles.push(new FormControl(selectRole.source.value));
    } else {
      const index = roles.controls.findIndex(x => x.value === selectRole.source.value);
      roles.removeAt(index);
    }
    
  }

  loadData(userId: string) {
    this.servUser.getUserEditRoles(userId).subscribe((data: ChangeRole) => {
      this.changeRole = data;
    });
  }

  onSave() {
    if (this.roleForm.value.roles && this.roleForm.value.roles.length > 0) {
      this.changeRole.userRoles = this.roleForm.value.roles
      this.servUser.serRolesForUser(this.changeRole).subscribe(rez => {
        console.log(rez)
      });
    }   
  }
  
  onFormSubmit(form: NgForm) {
    console.log(form);
  } 
}
