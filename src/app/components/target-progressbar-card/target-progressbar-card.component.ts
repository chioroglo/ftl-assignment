import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ProfileReactionsService} from "../../services/profileReactions/profile-reactions.service";
import {Store} from "@ngrx/store";
import {AuthState} from "../../states/auth/types/AuthState";
import {TargetPercentageDto} from "../../services/profileReactions/types";

@Component({
  selector: 'target-progressbar-card',
  templateUrl: './target-progressbar-card.component.html',
  styleUrls: ['./target-progressbar-card.component.css']
})
export class TargetProgressbarCardComponent implements OnInit {

  @Input()
  propertyName: string
  percentage$: Observable<TargetPercentageDto>;

  constructor(private _reactionService: ProfileReactionsService, private _store: Store<AuthState>) {
  }

  ngOnInit() {
    this.percentage$ = this._reactionService.getTargetPercentageByPositionName(this.propertyName);
  }
}
