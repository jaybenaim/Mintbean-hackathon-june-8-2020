import { SET_COLOR_SCHEME } from "./types";

// Set logged in user
export const setColorScheme = (payload) => {
  return {
    type: SET_COLOR_SCHEME,
    payload,
  };
};
