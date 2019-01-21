import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'user-manager-edit',
  templateUrl: './user-manager-edit.component.html',
  styleUrls: ['./user-manager-edit.component.css']
})
export class UserManagerEditComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


}
