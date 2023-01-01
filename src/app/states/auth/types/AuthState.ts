import {AuthorizedUserModel} from "src/app/models/user";

export interface AuthState {
  user: AuthorizedUserModel | null,
  isLoggedIn: boolean,
  loginError?: string,
  isLoginInProgress: boolean
}
