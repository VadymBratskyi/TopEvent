import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../_services/athentication.service"
 
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(
  private servAuthentication: AuthenticationService,
  private router: Router) { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logOut() {
    this.servAuthentication.logout().subscribe(rez => {
      this.router.navigate(['/user', 'login']);
    });
  }

}

