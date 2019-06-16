import { Component, OnInit } from '@angular/core';
import { UserLogin } from "../../barels/models.barel"
import { AuthenticationService } from "../../_services/athentication.service"
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: UserLogin;
  loading = false;

  constructor(
    private servAuthentication: AuthenticationService,
    private routerActivated: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.model = new UserLogin();
  }

  login() {
    this.loading = true;
    this.model.returnUrl = this.routerActivated.snapshot.queryParams['returnUrl'] || '/';
    this.servAuthentication.login(this.model).subscribe(user => {     
        this.loading = false;
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error',error);
        this.loading = false;
      });
  }


}
