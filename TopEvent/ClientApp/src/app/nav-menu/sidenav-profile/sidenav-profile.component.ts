import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../_services/athentication.service"
import { UserService } from "../../_services/user.services"


@Component({
  selector: 'sidenav-profile',
  templateUrl: './sidenav-profile.component.html',
  styleUrls: ['./sidenav-profile.component.css']
})
export class SidenavProfileComponent {
  
  constructor(
    private servAuthentication: AuthenticationService,
    private servUser: UserService,
    private router: Router) {

  }

}

