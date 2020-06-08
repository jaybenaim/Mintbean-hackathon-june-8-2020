import { SET_COLOR_SCHEME } from "../actions/types";
const initialState = {
  hue: "21",
  scheme: "triade",
  variation: "soft",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_COLOR_SCHEME:
      return {
        ...state,
        hue: action.payload.hue,
        scheme: action.payload.scheme,
        variation: action.payload.variation,
      };
    default:
      return state;
  }
}
