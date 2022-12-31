import {UserModel} from "src/app/models/user";

export interface AuthState {
  user: UserModel | null,
  isLoggedIn: boolean,
  loginError?: string,
  isLoginInProgress: boolean
}
