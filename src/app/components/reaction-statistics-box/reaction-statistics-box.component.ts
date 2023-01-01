import {Component, Input, OnInit} from '@angular/core';
import {ProfileReactionStatisticDto} from "../../services/profileReactions/types";
import {ProfileReactionsService} from "../../services/profileReactions/profile-reactions.service";
import {AuthService} from "../../services/auth/auth.service";
import {AuthState} from "../../states/auth/types/AuthState";
import {Store} from '@ngrx/store';
import {selectUser} from "../../states/auth/auth.selector";
import {map, Observable} from 'rxjs';
import {AuthorizedUserModel} from 'src/app/models/user';

@Component({
  selector: 'reaction-statistics-box',
  templateUrl: './reaction-statistics-box.component.html',
  styleUrls: ['./reaction-statistics-box.component.css']
})
export class ReactionStatisticsBoxComponent implements OnInit {

  @Input()
  materialIconType: string = "code";
  @Input()
  iconBackgroundColor: string = "#000";
  @Input()
  reactionName: string = "Statistics"


  reaction$: Observable<ProfileReactionStatisticDto>;
  user: AuthorizedUserModel;

  constructor(private _reactionsService: ProfileReactionsService, private _authService: AuthService, private _store: Store<AuthState>) {
  }

  ngOnInit() {

    this._store.select(selectUser).pipe(map((value: AuthorizedUserModel | null) => {
      if (value) {
        this.reaction$ = this._reactionsService.getReactionStatisticsForUser(this.reactionName, value.email);
      } else {
        throw new Error("NO USER IN STORE!");
      }
    })).subscribe();

  }

}
