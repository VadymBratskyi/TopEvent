import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../../_services/user.services";
import { MatTableDataSource, MatPaginator } from "../../../materil.barel";

@Component({
  selector: 'roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['name'];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


  constructor(
    private servUser: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadData();
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
