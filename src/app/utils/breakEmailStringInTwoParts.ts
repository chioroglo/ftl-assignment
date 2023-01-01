// this f-tion breaks email address in two parts for displaying in html an analogue of username
export const breakEmailStringInTwoParts = (email: string) => email.includes("@") ? email.split("@")[0] : "";

