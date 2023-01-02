import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Observable} from "rxjs";
import {UserModel} from "../../services/user/types";

@Component({
  selector: 'meeting-claim-card',
  templateUrl: './meeting-claim-card.component.html',
  styleUrls: ['./meeting-claim-card.component.css']
})
export class MeetingClaimCardComponent implements OnInit {

  user$: Observable<UserModel>

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.user$ = this._userService.getUser();
  }


}
