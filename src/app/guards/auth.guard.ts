import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../services/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _userService: UserService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._userService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
