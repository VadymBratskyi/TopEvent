import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../_services/athentication.service"
import { UserRegister } from "../../_models/common/user_register"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: UserRegister;
  loading = false;

  constructor(
    private servAuthentication: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.model = new UserRegister();
  }

  register() {
    this.loading = true;
    this.servAuthentication.register(this.model).subscribe(data => {
          this.router.navigate(['/fetch-data']);
        },
      error => {
        console.error('Error', error);
          this.loading = false;
        });
  }

}
