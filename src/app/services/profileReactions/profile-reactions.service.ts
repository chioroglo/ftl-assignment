import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {getRandomIntegerInRange} from "../../utils";
import {AmountOfReactionsRatio, ProfileReactionStatisticDto} from "./types";

@Injectable({
  providedIn: 'root'
})
export class ProfileReactionsService {

  constructor() {
  }


  getReactionStatisticsForUser(reactionName: string, username: string): Observable<ProfileReactionStatisticDto> {

    let availableStates: AmountOfReactionsRatio[] = ["same", "increase", "decrease"];


    return of({
      amount: getRandomIntegerInRange(30000, 50000),
      state: availableStates[getRandomIntegerInRange(0, 2)],
      name: reactionName
    });
  }
}
