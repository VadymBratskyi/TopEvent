import { Component, OnInit } from '@angular/core';
import { ClientService } from "../_services/client.services";
import { Client } from "../_models/Client";
@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit{

  public forecasts: Client[];

  constructor(private serClient: ClientService) {
   
  }

  ngOnInit() {
    this.serClient.getAll().subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

}

