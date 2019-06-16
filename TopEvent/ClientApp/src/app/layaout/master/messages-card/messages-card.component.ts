import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavMessageItem } from '../../../barels/models.barel';

@Component({
  selector: 'app-messages-card',
  templateUrl: './messages-card.component.html',
  styleUrls: ['./messages-card.component.scss']
})
export class MessagesCardComponent implements OnInit {

  messages: any[];

  constructor(
    private router: Router) {
  }

  ngOnInit() {
    this.messages = [];
    for (let i = 0; i < 6; i++) {
      let note = new NavMessageItem();
      note.fromUser = "User_" + i;
      note.message = "Message_" + i;
      note.time = new Date();
      this.messages.push(note);
    }
  }

}
