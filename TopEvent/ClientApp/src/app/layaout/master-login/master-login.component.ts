import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/athentication.service';
import { UserLogin } from '../../models.barel';

@Component({
  selector: 'app-master-login',
  templateUrl: './master-login.component.html',
  styleUrls: ['./master-login.component.css']
})
export class MasterLoginComponent implements OnInit {

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
