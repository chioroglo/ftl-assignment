import {Injectable} from "@angular/core";
import {AuthorizedUserModel, LoginDto} from "../../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, of} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AuthState} from "../../states/auth/types/AuthState";
import {getSavedUserClaimsFromStorage} from "../../utils/getSavedUserClaimsFromStorage";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _httpClient: HttpClient, private _store: Store<AuthState>) {
  }

  isAuthorized(): boolean {
    return !!getSavedUserClaimsFromStorage();
  }

  authenticate(credentials: LoginDto): Observable<AuthorizedUserModel> {
    return of({email: credentials.email});
  }
}
