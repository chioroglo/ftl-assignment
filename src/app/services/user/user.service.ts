import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from 'rxjs';
import {UserModel} from './types';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private _http: HttpClient) {
  }

  getUser(): Observable<UserModel> {
    return this._http.get<any>(environment.userApiUrl + '/?results=1').pipe(map(val => val.results[0]));
  }
}
