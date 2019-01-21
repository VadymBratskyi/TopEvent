import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'user-manager-add',
  templateUrl: './user-manager-add.component.html',
  styleUrls: ['./user-manager-add.component.css']
})
export class UserManagerAddComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


}
