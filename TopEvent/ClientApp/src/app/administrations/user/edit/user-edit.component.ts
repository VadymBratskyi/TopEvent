import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../../../_services/user.services";
import { User, UserEdit } from "../../../barels/models.barel";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  model: UserEdit;
  loading: boolean;

  editForm: FormGroup;
  userId: string;

  constructor(
    private servUser: UserService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  initForm() {

  }


  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(rout => {
      this.userId = rout.get("userId");
      if (this.userId) {
        this.onLoadDate(this.userId);
      }
    });
  }

  onLoadDate(userId: string) {
    this.servUser.getById(userId).subscribe((user: User) => {
      this.editForm = new FormGroup({
        "email": new FormControl(user.email, [Validators.email, Validators.required]),
        "phonenumber": new FormControl(user.phoneNumber, Validators.required)
      });
    });
  }

  edit() {
    this.loading = true;
    this.model = new UserEdit();
    this.model.id = this.userId;
    this.model.email = this.editForm.value.email;
    this.model.phonenumber  = this.editForm.value.phonenumber;
    this.servUser.edit(this.model).subscribe(result => {
      this.router.navigate(['/administrations','users']);
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
