import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../../../_services/user.services";
import { ChangeRole } from "../../../models.barel";

@Component({
  selector: 'user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  changeRole: ChangeRole;

  constructor(
    private servUser: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(rout => {
      let userId = rout.get("userId");
      if (userId) {
        this.loadData(userId);
      }
    });
  }

  loadData(userId: string) {
    this.servUser.getUserEditRoles(userId).subscribe((data: ChangeRole) => {
      this.changeRole = data;
    });
  }

  onSave() {
    
  }

}
