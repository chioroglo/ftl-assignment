import {Component} from '@angular/core';
import { Store } from '@ngrx/store';
import {map, Observable } from 'rxjs';
import { logout } from 'src/app/states/auth/auth.actions';
import { selectUser } from 'src/app/states/auth/auth.selector';
import {AuthState} from "../../states/auth/types/AuthState";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  emailOfUser$: Observable<string | undefined>;
  //user$: Observable<AuthState> = selectUser(this.store);
  constructor(private store: Store<AuthState>) {
    this.emailOfUser$ = this.store.select(selectUser).pipe(map(val => val?.email));
  }

  logoutButtonClick() {
    this.store.dispatch(logout());
  }

}
