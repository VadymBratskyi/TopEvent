import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../_services/user.services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
    private serUser: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  register() {
    this.loading = true;
    this.serUser.register(this.model).subscribe(data => {
       //  this.alertService.success('Registration successful', true);
          this.router.navigate(['/fetch-data']);
        },
      error => {
        //  this.alertService.error(error);
          this.loading = false;
        });
  }

}
