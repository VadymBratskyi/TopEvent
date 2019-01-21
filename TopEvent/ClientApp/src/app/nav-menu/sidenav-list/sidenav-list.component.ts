import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../_services/user.services"


@Component({
  selector: 'sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent {

  constructor(
    private servUser: UserService,
    private router: Router) {

  }

}

