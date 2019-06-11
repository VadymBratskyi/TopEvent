import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavNotificationItem } from '../../../models.barel';

@Component({
  selector: 'app-notifications-card',
  templateUrl: './notifications-card.component.html',
  styleUrls: ['./notifications-card.component.css']
})
export class NotificationsCardComponent implements OnInit {

  notifications: any[];

  noteColor = ["#f44336", "#009688", "#9c27b0", "#8bc34a"]

  constructor(
    private router: Router) {
  }

  ngOnInit() {
    this.notifications = [];
    for (let i = 0; i < 4; i++) {
      let note = new NavNotificationItem("Title_" + i);
      note.description = "Info_" + i;
      note.time = new Date();
      note.color = this.noteColor[i];
      this.notifications.push(note);
    }
  }

}
