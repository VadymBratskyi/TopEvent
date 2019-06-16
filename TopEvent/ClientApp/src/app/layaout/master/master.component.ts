import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.services';
import { AuthenticationService } from '../../_services/athentication.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  constructor(
    private servAuthentication: AuthenticationService,
    public servUser: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
