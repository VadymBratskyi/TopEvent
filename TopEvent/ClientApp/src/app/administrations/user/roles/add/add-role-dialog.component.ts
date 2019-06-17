import { Component, OnInit, } from '@angular/core';
import { MatDialogRef } from "../../../../barels/materil.barel";

@Component({
  selector: 'add-role-dialog',
  templateUrl: './add-role-dialog.component.html',
  styleUrls: ['./add-role-dialog.component.scss']
})
export class AddRoleDialogComponent implements OnInit {

  roleName: string;
  
  constructor(
    public dialogRef: MatDialogRef<AddRoleDialogComponent>
  ) { }

  ngOnInit() {
  }

  onCancel() {
    this.dialogRef.close();
  }

}
