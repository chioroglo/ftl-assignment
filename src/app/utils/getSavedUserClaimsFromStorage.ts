import {AuthorizedUserModel} from "../models/user";
import {browserStorageClaimNames} from "./browserStorageClaimNames";

export const getSavedUserClaimsFromStorage = (): AuthorizedUserModel | null => {
  let userClaim: AuthorizedUserModel | null;

  let emailClaim = localStorage.getItem(browserStorageClaimNames.email);

  return emailClaim ? { email: emailClaim } : null;
}
