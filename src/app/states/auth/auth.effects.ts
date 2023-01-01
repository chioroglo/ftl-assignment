import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {AuthService} from "../../services/user/auth.service";
import {loginFailure, loginRequest, loginSuccess, logout} from "./auth.actions";

@Injectable()
export class AuthEffects {

  loginRequest$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loginRequest),
      exhaustMap((action) => {
          return this._authService.authenticate(action)
            .pipe(
              map((successfullResponse) => {
                  return loginSuccess(successfullResponse)
                },
              ),
              catchError((error) => of(loginFailure(error))
              ));
        }
      )
    )
  );

  loginRedirect$ = createEffect(() => this._actions$.pipe(
    ofType(loginSuccess),
    tap((action) => this._router.navigateByUrl("/profile"))
  ), {dispatch: false});

  logout$ = createEffect(() => this._actions$.pipe(
    ofType(logout),
    tap((action) => this._router.navigateByUrl("/login"))
  ), {dispatch: false})

  // loginFailure$ = createEffect(() =>
  //     this._actions$.pipe(
  //       ofType(loginFailure),
  //     )
  //   , {dispatch: false})

  constructor(private _actions$: Actions, private _authService: AuthService, private _router: Router) {
  }
}
