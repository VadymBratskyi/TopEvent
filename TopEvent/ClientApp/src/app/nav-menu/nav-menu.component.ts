import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../_services/athentication.service"
import { UserService } from "../_services/user.services"


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  searchValue: string;

  constructor(
  private servAuthentication: AuthenticationService,
    private servUser: UserService,
    private router: Router) {
    console.log(servUser.GetCurrentUser);
  }
    
}

