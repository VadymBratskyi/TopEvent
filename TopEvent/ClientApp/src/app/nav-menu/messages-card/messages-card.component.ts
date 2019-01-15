import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-menu-messages-card',
  templateUrl: './messages-card.component.html',
  styleUrls: ['./messages-card.component.css']
})
export class NavMenuMessageCardComponent {

  searchValue: string;

  constructor(
    private router: Router) {
  }


}

