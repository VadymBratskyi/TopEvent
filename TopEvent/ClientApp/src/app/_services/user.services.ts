import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../_models/User";
import { UserRegister } from "../_models/common/user_register";
import { Client } from "../_models/Client";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Client[]>('/api/Account/GetClients');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  register(user: UserRegister) {
    return this.http.post('/api/Account/Register', user);
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
}
