import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserEdit, UserCreate, UserChangePassword, ChangeRole } from "../barels/models.barel";
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private CurrentUser: User;

  get GetCurrentUser() {
    if (!this.CurrentUser && localStorage.getItem("currentUser")) {
      let strUser = JSON.parse(localStorage.getItem("currentUser"));
      this.CurrentUser = <User> strUser;
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
    return this.http.get<User[]>(environment.rootAipiUrl + environment.userGetAll);
  }

  getById(id: string) {
    return this.http.get(environment.rootAipiUrl+environment.userGetById+'?userId=' + id);
  }

  create(user: UserCreate) {
    return this.http.post(environment.rootAipiUrl+environment.userCreate, user);
  }

  edit(user: UserEdit) {
    return this.http.post(environment.rootAipiUrl+environment.userEdit, user);
  }

  changePassword(user: UserChangePassword) {
    return this.http.post(environment.rootAipiUrl+environment.userChangePassword, user);
  }

  delete(id: string) {
    return this.http.post(environment.rootAipiUrl+environment.userDelete+'?userId=' + id, null);
  }

  getRolesAll() {
    return this.http.get<any[]>(environment.rootAipiUrl+ environment.rolesGetAll);
  }

  createRole(roleName: string) {
    return this.http.post(environment.rootAipiUrl + environment.rolesCreate + "?name=" + roleName, null);
  }

  deleteRole(roleId: string) {
    return this.http.post(environment.rootAipiUrl + environment.rolesDelete + "?id=" + roleId, null);
  }

  getUserEditRoles(userId: string) {
    return this.http.post(environment.rootAipiUrl + environment.rolesEdit + "?userId=" + userId, null);
  }

  serRolesForUser(changeRole: ChangeRole) {
    return this.http.post(environment.rootAipiUrl + environment.rolesEditUserRoles + "?userId=" + changeRole.userId, changeRole.userRoles);
  }
}
