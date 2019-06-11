import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavMessageItem } from "../../../../models.barel";

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit, OnChanges {
   
  @Input() inNavMessageItem: NavMessageItem;
  mess: NavMessageItem;

  constructor(
    private router: Router) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.mess = this.inNavMessageItem;
  }

}
