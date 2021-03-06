import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../../../barels/models.barel";
import { MatTableDataSource, MatPaginator } from "../../../barels/materil.barel";
import { UserService } from "../../../_services/user.services";
import { delay } from 'rxjs/operators';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @ViewChildren(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['email', 'userName', 'phoneNumber', 'buttons'];

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
      this.dataSource = new MatTableDataSource<User>(data);
      this.isLoadingResults = false;
      this.isRateLimitReached = false;
      //this.resultsLength = data.length;
      //this.dataSource.paginator = this.paginator;
    },
      error => console.error("vados error"));
  }

  onDelete(userId: string) {
    if (confirm("Are you shure?")) {
      this.servUser.delete(userId).subscribe(rez => {
      this.loadData();
      });
    }    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
