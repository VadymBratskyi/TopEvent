import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../_services/user.services";
import { ChangeRole } from "../models.barel";
import { NgForm, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent2 implements OnInit {

  changeRole: ChangeRole;

  myForm: FormGroup = new FormGroup({

    "userName": new FormControl("Tom", [Validators.required, this.userNameValidator]),
    "userEmail": new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]),
    "phones": new FormArray([new FormControl("+3", Validators.required)])
  });

  userNameValidator(control: FormControl): { [s: string]: boolean } {

    if (control.value === "no") {
      return { "userName": true };
    }

    return null;
  }

  constructor(
    private servUser: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(rout => {
      let userId = rout.get("userId");
      if (userId) {
        this.loadData(userId);
      }
    });
  }

  loadData(userId: string) {
    this.servUser.getUserEditRoles(userId).subscribe((data: ChangeRole) => {
      this.changeRole = data;
    });
  }

  onSave() {
    
  }


  //submit(form: NgForm){
  //  console.log(form);
  //}

  submit(form: NgForm) {
    console.log(this.myForm);
  }

  addPhone() {
    (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+3", Validators.required));
  }
}
