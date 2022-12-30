import { createReducer, on } from "@ngrx/store";
import {userInitialState} from "./userInitialState";
import {UserStateActionTypes} from "./types/UserStateActionTypes";
import {authorize, logout} from "./userStateActions";
import { UserModel } from "src/app/models/user";

export  const userStateReducer = createReducer(userInitialState,
  on(logout,(state) => {
    return {...state,isAuthorized: false,user: null}
  }),
  on(authorize,(state,payload: UserModel) => {
      return {...state,user: payload,isAuthorized: true}
    }
  ));
