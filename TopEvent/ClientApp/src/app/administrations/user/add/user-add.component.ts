import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../../_services/user.services";
import { UserCreate } from "../../../barels/models.barel";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  model: UserCreate;

  loading: boolean;
  hide = true;

  addForm: FormGroup;

  constructor(
    private servUser: UserService,
    private router: Router
  ) { }


  ngOnInit() {
    this.addForm = new FormGroup({
      "email": new FormControl("", [Validators.email, Validators.required]),
      "phonenumber": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required),
    });
  }
  

  add() {
    this.loading = true;
    this.model = this.addForm.value;
    this.servUser.create(this.model).subscribe(result => {
        this.router.navigate(['/administrations', 'users']);
      },
      error => {
        console.error('Error', error);
        this.loading = false;
      });
  }

  getErrorMessage(component) {
    return component.hasError('required') ? 'You must enter a value' :
      component.hasError('email') ? 'Not a valid email' :
        '';
  }

}
