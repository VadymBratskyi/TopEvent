import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../../_services/athentication.service";
import { UserService } from "../../../_services/user.services";

@Component({
  selector: 'app-sidenav-profile',
  templateUrl: './sidenav-profile.component.html',
  styleUrls: ['./sidenav-profile.component.scss']
})
export class SidenavProfileComponent implements OnInit {

  constructor(
    private servAuthentication: AuthenticationService,
    private servUser: UserService,
    private router: Router) {
  }

  ngOnInit() {
  }

}
