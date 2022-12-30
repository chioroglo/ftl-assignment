import {Injectable} from "@angular/core";
import {LoginDto, UserModel} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {UserState} from "../reducers/user/types/UserState";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl: string = environment.userApiUrl;

  constructor(private _httpClient: HttpClient) {
  }

  isLoggedIn(): boolean {
    return false;
  }

  authenticate(credentials: LoginDto): Observable<UserModel> {

    return new Observable<UserModel>((subscriber) => {
      subscriber.next(credentials as UserModel);
    });
  }
}
