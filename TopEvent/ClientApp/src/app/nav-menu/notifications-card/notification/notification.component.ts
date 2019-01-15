import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'nav-menu-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NavMenuNotificationComponent {

  searchValue: string;

  constructor(
    private router: Router) {
  }


}

