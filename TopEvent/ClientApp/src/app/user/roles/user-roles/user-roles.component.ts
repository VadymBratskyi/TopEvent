import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../../_services/user.services";

@Component({
  selector: 'user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  constructor(
    private servUser: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loadData() {
    this.servUser.getRolesAll().subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data);
      this.isLoadingResults = false;
      this.isRateLimitReached = false;
      //this.resultsLength = data.length;
      this.dataSource.paginator = this.paginator;
    });
  }

}
