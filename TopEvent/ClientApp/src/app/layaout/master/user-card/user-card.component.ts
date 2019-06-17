import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../../_services/athentication.service"
import { UserService } from "../../../_services/user.services"

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  searchValue: string;

  constructor(
    private servAuthentication: AuthenticationService,
    public servUser: UserService,
    private router: Router) {
  }

  ngOnInit() {

  }

  signOut() {
    this.servAuthentication.logout().subscribe(rez => {
      this.router.navigate(['/login']);
    });
  }

}
