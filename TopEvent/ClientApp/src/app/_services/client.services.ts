import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../_models/User";
import { Client } from "../_models/Client";

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Client[]>('/api/Account/GetClients');
  }

  getById(id: number) {
    //return this.http.get('/api/users/' + id);
  }
  
  update(user: User) {
    //return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    //return this.http.delete('/api/users/' + id);
  }
}