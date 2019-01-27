import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserRegister, UserLogin } from "../models.barel";
import { UserService } from './user.services';
import { environment } from "../../environments/environment";


@Injectable()
export class AuthenticationService {

  constructor(
    private servUser: UserService,
    private http: HttpClient) { }

  
  register(user: UserRegister) {
    return this.http.post(environment.rootAipiUrl+environment.accountRegister, user).pipe(
      map((model: UserRegister) => {
        if (model) {
          localStorage.setItem("currentUser", JSON.stringify(model));
        }
        return model;
      })
    );
  }

  login(user: UserLogin) {

    return this.http.post(environment.rootAipiUrl+environment.accountLogin, user)
      .pipe(
        map((model: UserLogin) => {
          if (model) {
            localStorage.setItem("currentUser", JSON.stringify(model));
          }
          return model;
        })
      );
  }

  logout() {
    return this.http.post(environment.rootAipiUrl+environment.accountLogOut, null)
      .pipe(
        map(out => {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.servUser.SetCurrentUser = null;
          return out;
        })
      );

  }

}
