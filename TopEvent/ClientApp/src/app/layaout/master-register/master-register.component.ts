import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegister } from '../../barels/models.barel';
import { AuthenticationService } from '../../_services/athentication.service';


@Component({
  selector: 'app-master-register',
  templateUrl: './master-register.component.html',
  styleUrls: ['./master-register.component.scss']
})
export class MasterRegisterComponent implements OnInit {

  model: UserRegister;

  registerForm: FormGroup;

  loading = false;

  hideP = true;
  hidePC = true;

  constructor(
    private servAuthentication: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      "name": new FormControl("", Validators.required),
      "thurname": new FormControl("", Validators.required),
      "patronymic": new FormControl("", Validators.required),
      "birthday": new FormControl("", Validators.required),
      "phonenumber": new FormControl("", Validators.required),
      "email": new FormControl("", [Validators.email, Validators.required]),
      "password": new FormControl("", Validators.required),
      "passwordConfirm": new FormControl("", Validators.required),
    });
  }

  register() {
    console.log(this.registerForm);
    this.loading = true;
    this.model = this.registerForm.value;
    this.servAuthentication.register(this.model).subscribe(data => {
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
