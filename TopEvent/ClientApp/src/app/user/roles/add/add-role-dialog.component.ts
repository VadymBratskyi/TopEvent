import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from "../../../_services/user.services";
import { MatDialogRef } from "../../../materil.barel";

@Component({
  selector: 'add-role-dialog',
  templateUrl: './add-role-dialog.component.html',
  styleUrls: ['./add-role-dialog.component.css']
})
export class AddRoleDialogComponent implements OnInit {

  roleName: string;

  constructor(
    public dialogRef: MatDialogRef<AddRoleDialogComponent>,
    private servUser: UserService
  ) { }

  ngOnInit() {

  }

  onCancel() {
    this.dialogRef.close();
  }

}
