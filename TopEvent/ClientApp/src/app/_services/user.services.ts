import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../_models/User";



@Injectable()
export class UserService {

  private CurrentUser: User;

  get GetCurrentUser() {
    if (!this.CurrentUser && localStorage.getItem("currentUser")) {
      let strUser = JSON.parse(localStorage.getItem("currentUser"));
      this.CurrentUser = new User(strUser.email);
      return this.CurrentUser;
    }    
    return this.CurrentUser;
  }

  set SetCurrentUser(value: any) {
    if (value) {
      let strUser = JSON.parse(value);
      this.CurrentUser = new User(strUser.email);
    }
    else {
      this.CurrentUser = null;
    }    
  }
   
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(user: User) {
    return this.http.post('/api/users', user);
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
}
