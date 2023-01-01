import {Component} from '@angular/core';
import {map, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AuthState} from "../../states/auth/types/AuthState";
import {selectUser} from "../../states/auth/auth.selector";
import {breakEmailStringInTwoParts} from "../../utils";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  usernamePlaceholderMappedFromEmail$: Observable<string | undefined>;

  constructor(private store: Store<AuthState>) {
    this.usernamePlaceholderMappedFromEmail$ = this.store.select(selectUser).pipe(map(val => breakEmailStringInTwoParts(val?.email || "")));
  }

}
