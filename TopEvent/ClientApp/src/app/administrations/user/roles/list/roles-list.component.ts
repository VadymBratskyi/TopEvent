import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../../../_services/user.services";
import { AddRoleDialogComponent } from "../add/add-role-dialog.component";
import { MatTableDataSource, MatPaginator, MatDialog } from "../../../../barels/materil.barel";

@Component({
  selector: 'roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {

  @ViewChildren(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['name','buttons'];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


  constructor(
    private servUser: UserService,
    public dialog: MatDialog,
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
      //this.dataSource.paginator = this.paginator;
    });
  }

  addNewRole() {
    const dialogRef = this.dialog.open(AddRoleDialogComponent, {
      width: '250px'
      });

    dialogRef.afterClosed().subscribe(result => {
      this.isLoadingResults = true;
      this.saveRole(result);
    });
  }

  onDelete(roleId: string) {
    this.deleteRole(roleId);
  }

  saveRole(roleName: string) {
    if (roleName) {
      this.servUser.createRole(roleName).subscribe(role => {
        this.loadData();
      });
    } else {
      this.isLoadingResults = false;
    }
  }

  deleteRole(roleId) {
    if (roleId) {
      this.servUser.deleteRole(roleId).subscribe(role => {
        this.loadData();
      });
    }
  }

}
