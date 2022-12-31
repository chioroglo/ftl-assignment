import {createAction, props} from "@ngrx/store";
import {AuthActionTypes} from "./types/AuthActionTypes";
import {LoginDto} from "../../models/user";
import {LoginSuccessfullResponse} from "../../services/user/types/LoginSuccessfullResponse";

export const loginRequest = createAction(AuthActionTypes.LoginRequestOngoing, props<LoginDto>());

export const loginSuccess = createAction(AuthActionTypes.LoggedSuccessfully, props<LoginSuccessfullResponse>());

export const loginFailure = createAction(AuthActionTypes.LoggedFailure, props<{ errorMessage: string }>());
