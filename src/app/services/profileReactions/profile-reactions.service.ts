import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {getRandomIntegerInRange} from "../../utils";
import {AmountOfReactionsRatio, ProfileReactionStatisticDto, TargetPercentageDto} from "./types";

@Injectable({
  providedIn: 'root'
})
export class ProfileReactionsService {

  constructor() {
  }


  // faked api call
  getReactionStatisticsForUser(reactionName: string, username: string): Observable<ProfileReactionStatisticDto> {

    let availableStates: AmountOfReactionsRatio[] = ["same", "increase", "decrease"];


    return of({
      amount: getRandomIntegerInRange(30000, 50000),
      state: availableStates[getRandomIntegerInRange(0, 2)],
      name: reactionName
    });
  }

  getTargetPercentageByPositionName(statisticsPositionName: string): Observable<TargetPercentageDto> {
    return of({
      positionName: statisticsPositionName,
      percentage: getRandomIntegerInRange(0, 100)
    });
  }
}
