import { Component, OnInit } from '@angular/core';
import { UserService } from "../_services/user.services";
import { Client } from "../_models/Client";
@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit{

  public forecasts: Client[];

  constructor(private serUser: UserService) {
   
  }

  ngOnInit() {
    this.serUser.getAll().subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

}

