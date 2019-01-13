import { Component, OnInit } from '@angular/core';
import { UserLogin } from "../../_models/common/user_login"
import { UserService } from "../../_services/user.services"
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    private serUser: UserService,
    private routerActivated: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    
  }
  

}
