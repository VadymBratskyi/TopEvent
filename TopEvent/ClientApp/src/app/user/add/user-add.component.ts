import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../../_services/user.services";
import { UserCreate } from "../../barels/models.barel";

@Component({
  selector: 'user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  model: UserCreate;
  loading: boolean;

  constructor(
    private servUser: UserService,
    private router: Router
  ) { }


  ngOnInit() {
    this.model = new UserCreate();
  }
  

  create() {
    this.loading = true;
    this.servUser.create(this.model).subscribe(result => {
        this.router.navigate(['/users', 'list']);
      },
      error => {
        console.error('Error', error);
        this.loading = false;
      });
  }

}
