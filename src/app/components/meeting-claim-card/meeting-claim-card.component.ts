import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Observable} from "rxjs";
import {UserModel} from "../../services/user/types";

@Component({
  selector: 'meeting-claim-card',
  templateUrl: './meeting-claim-card.component.html',
  styleUrls: ['./meeting-claim-card.component.css']
})
export class MeetingClaimCardComponent implements OnInit{

  constructor(private _userService: UserService) {
  }

  user$: Observable<UserModel>

  ngOnInit() {
    this.user$ = this._userService.getUser();
  }


}
