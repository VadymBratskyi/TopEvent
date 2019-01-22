import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../../models.barel";
import { UserService } from "../../_services/user.services";


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  dataSource: User[];
  displayedColumns: string[] = ['email', 'userName', 'phoneNumber','buttons'];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


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
      this.isLoadingResults = false;
      this.isRateLimitReached = false;
      //this.resultsLength = data.length;
    });
  }

  onDelete(userId: string) {
    if (confirm("Are you shure?")) {
      this.servUser.delete(userId).subscribe(rez => {
      this.loadData();
      });
    }
    
  }

}
