import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../../../_services/user.services"
import { UserChangePassword, User } from "../../../barels/models.barel"
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'user-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  model: UserChangePassword;
  loading = false;

  changePassForm: FormGroup;

  userId: string;

  hideOld = true;
  hideNew = true;

  constructor(
    private servUser: UserService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

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
      this.changePassForm = new FormGroup({
        "email": new FormControl(user.email, [Validators.email, Validators.required]),
        "oldPassword": new FormControl("", Validators.required),
        "newPassword": new FormControl("", Validators.required)
      });
    });
  }

  changePassword() {
    this.loading = true;
    this.model = new UserChangePassword();
    this.model.id = this.userId;
    this.model.email = this.changePassForm.value.email;
    this.model.oldPassword = this.changePassForm.value.oldPassword;
    this.model.newPassword = this.changePassForm.value.newPassword;
    this.servUser.changePassword(this.model).subscribe(data => {
      this.router.navigate(['/']);
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
