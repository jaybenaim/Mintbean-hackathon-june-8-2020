import { SET_COLOR_SCHEME, SET_PALLETS } from "../actions/types";
const initialState = {
  hue: "21",
  scheme: "triade",
  variation: "soft",
  palettes: [],
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
    case SET_PALLETS:
      return {
        ...state,
        palettes: action.payload,
      };

    default:
      return state;
  }
}
