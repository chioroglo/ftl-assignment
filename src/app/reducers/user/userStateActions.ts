import {Action, createAction, props} from "@ngrx/store";
import {UserStateActionTypes} from "./types/UserStateActionTypes";
import {UserModel} from "../../models/user";


export const authorize = createAction(UserStateActionTypes.AUTHORIZE,props<UserModel>());

export const logout = createAction(UserStateActionTypes.LOGOUT);
