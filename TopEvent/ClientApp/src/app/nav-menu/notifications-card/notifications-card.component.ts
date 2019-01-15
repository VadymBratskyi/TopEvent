import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'nav-menu-notifications-card',
  templateUrl: './notifications-card.component.html',
  styleUrls: ['./notifications-card.component.css']
})
export class NavMenuNotificationsrCardComponent {

  searchValue: string;

  constructor(
    private router: Router) {
  }


}

