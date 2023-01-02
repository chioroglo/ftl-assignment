import {AuthState} from "./types/AuthState";
import {getSavedUserClaimsFromStorage} from "../../utils/getSavedUserClaimsFromStorage";

export const authStateInitial: AuthState = {
  isLoginInProgress: false,
  user: getSavedUserClaimsFromStorage(),
  isLoggedIn: !!getSavedUserClaimsFromStorage() // simplified call
}
