import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/athentication.service';
import { UserLogin } from '../../barels/models.barel';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-master-login',
  templateUrl: './master-login.component.html',
  styleUrls: ['./master-login.component.scss']
})
export class MasterLoginComponent implements OnInit {

  model: UserLogin;
  loading = false;
  hide = true;

  loginForm: FormGroup;

  constructor(
    private servAuthentication: AuthenticationService,
    private routerActivated: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {    
    this.loginForm = new FormGroup({      
      "email": new FormControl("", [Validators.email, Validators.required]),
      "password": new FormControl("", Validators.required),
      "rememberMe": new FormControl(false) 
    });
  }

  login() {
    console.log(this.loginForm);
    this.loading = true;
    this.model = this.loginForm.value;
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

  getErrorMessage(component) {
    return component.hasError('required') ? 'You must enter a value' :
    component.hasError('email') ? 'Not a valid email' :
            '';
  }

}
