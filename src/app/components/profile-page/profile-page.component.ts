import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {map, Observable} from 'rxjs';
import {logout} from 'src/app/states/auth/auth.actions';
import {selectUser} from 'src/app/states/auth/auth.selector';
import {AuthState} from "../../states/auth/types/AuthState";
import {breakEmailStringInTwoParts} from "../../utils";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  usernamePlaceholderFromStorageEmail$: Observable<string | undefined>;

  constructor(private store: Store<AuthState>) {
    // TODO change it to call of user auth service
    this.usernamePlaceholderFromStorageEmail$ = this.store.select(selectUser).pipe(map(val => breakEmailStringInTwoParts(val?.email || "")));
  }

  logoutButtonClick() {
    this.store.dispatch(logout());
  }

}
