import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../../models.barel";
import { UserService } from "../../_services/user.services";


@Component({
  selector: 'user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {


  dataSource: User[];
  displayedColumns: string[] = ['email', 'userName', 'phoneNumber'];

  constructor(
    private router: Router,
    private servUser: UserService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.servUser.getAll().subscribe(data => {
      this.dataSource = data;
      console.log('data',data);
    });
  }


}
