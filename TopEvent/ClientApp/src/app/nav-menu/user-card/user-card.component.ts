import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../../_services/athentication.service"
import { UserService } from "../../_services/user.services"

@Component({
  selector: 'nav-menu-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class NavMenuUserCardComponent {

  searchValue: string;
  
  constructor(
    private servAuthentication: AuthenticationService,
    public servUser: UserService,
    private router: Router) {
  }

  signOut() {
    this.servAuthentication.logout().subscribe(rez => {
      this.router.navigate(['/users', 'login']);
    });
  }
}

