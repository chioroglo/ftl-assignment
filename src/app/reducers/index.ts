import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import { UserState } from './user/types/UserState';
import {userStateReducer} from "./user/userStateReducer";

export interface State {
  user: UserState;
}

export const reducers: ActionReducerMap<State> = {
  user: userStateReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
