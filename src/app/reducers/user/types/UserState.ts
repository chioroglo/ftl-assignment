import { UserModel } from "src/app/models/user";

export interface UserState {
  user : UserModel | null;
  isAuthorized: boolean;
}
