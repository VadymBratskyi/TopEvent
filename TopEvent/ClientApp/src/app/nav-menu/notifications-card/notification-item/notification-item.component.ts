import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavNotificationItem } from "../../../models.barel";



@Component({
  selector: 'nav-menu-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css']
})
export class NavMenuNotificationItemComponent implements OnChanges {
   

  @Input() inNavNotificationItem: NavNotificationItem;
  note: NavNotificationItem;
  
  constructor(
    private router: Router) {
  }

  ngOnChanges() {   
    this.note = this.inNavNotificationItem;
  }

  

}

