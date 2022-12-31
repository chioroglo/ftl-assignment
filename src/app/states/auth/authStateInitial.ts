import {AuthState} from "./types/AuthState";

export const authStateInitial: AuthState = {
  isLoginInProgress: false,
  user: null,
  isLoggedIn: false
}
