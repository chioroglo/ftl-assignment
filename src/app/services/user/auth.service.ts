import {Injectable} from "@angular/core";
import {LoginDto, UserModel} from "../../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, of} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AuthState} from "../../states/auth/types/AuthState";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseUrl: string = environment.userApiUrl;

  constructor(private _httpClient: HttpClient, private _store: Store<AuthState>) {
  }

  isAuthorized(): Observable<boolean> {
    return this._store.pipe(select(state => state.isLoggedIn));
  }


  authenticate(credentials: LoginDto): Observable<UserModel> {

    // const request = this._httpClient.get<UserModel>(environment.userApiUrl + "?results=1");

    const request = of({email: credentials.email});
    return request;
  }
}
