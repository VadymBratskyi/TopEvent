import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../../_services/user.services";
import { User, UserEdit } from "../../barels/models.barel";

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  model: UserEdit;
  loading: boolean;

  constructor(
    private servUser: UserService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }


  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(rout => {
      let userId = rout.get("userId");
      if (userId) {
        this.onLoadDate(userId);
      }
    });
  }

  onLoadDate(userId: string) {
    this.servUser.getById(userId).subscribe((user: User) => {
      this.model = new UserEdit();
      this.model.id = user.id;
      this.model.email = user.email;
      this.model.phonenumber = user.phoneNumber;
    });
  }

  edit() {
    this.loading = true;
    this.servUser.edit(this.model).subscribe(result => {
        this.router.navigate(['/users','list']);
      },
      error => {
        console.error('Error', error);
        this.loading = false;
      });
  }

}
