import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NavMessageItem } from "../../../models.barel";



@Component({
  selector: 'nav-menu-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class NavMenuMessageItemComponent implements OnChanges  {

  @Input() inNavMessageItem: NavMessageItem;
  mess: NavMessageItem;

  constructor(
    private router: Router) {
  }

  ngOnChanges() {
    this.mess = this.inNavMessageItem;
  }

}

