import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavNotificationItem } from "../../../../models.barel";

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.css']
})
export class NotificationItemComponent implements OnInit, OnChanges {
  
  @Input() inNavNotificationItem: NavNotificationItem;
  note: NavNotificationItem;

  constructor(
    private router: Router) {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.note = this.inNavNotificationItem;
  }

}
