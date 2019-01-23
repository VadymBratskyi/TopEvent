import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from "../../_services/user.services"
import { UserChangePassword, User } from "../../models.barel"

@Component({
  selector: 'user-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  model: UserChangePassword;
  loading = false;

  constructor(
    private servUser: UserService,
    private activatedRouter: ActivatedRoute,
    private router: Router
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
      this.model = new UserChangePassword();
      this.model.id = user.id;
      this.model.email = user.email;
    });
  }

  changePassword() {
    this.loading = true;
    this.servUser.changePassword(this.model).subscribe(data => {
      this.router.navigate(['/users','list']);
    },
      error => {
        console.error('Error', error);
        this.loading = false;
      });
  }

}
