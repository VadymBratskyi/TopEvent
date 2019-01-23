import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserEdit, UserCreate, UserChangePassword } from "../models.barel";



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
    return this.http.get<User[]>('/api/Users/GetAll');
  }

  getById(id: string) {
    return this.http.get('/api/Users/GetById?userId=' + id);
  }

  create(user: UserCreate) {
    return this.http.post('/api/Users/Create', user);
  }

  edit(user: UserEdit) {
    return this.http.post('/api/Users/Edit', user);
  }

  changePassword(user: UserChangePassword) {
    return this.http.post('/api/Users/ChangePassword', user);
  }

  delete(id: string) {
    return this.http.post('/api/Users/Delete?userId=' + id, null);
  }
}
