import { SET_COLOR_SCHEME, GET_ERRORS, SET_PALLETS } from "./types";
import local from "../../api/backend";

export const setColorScheme = (payload) => {
  return {
    type: SET_COLOR_SCHEME,
    payload,
  };
};

export const getPalettes = (userId) => (dispatch) => {
  local
    .get(`/palettes?userId=${userId}`)
    .then((res) => {
      dispatch(setPalettes(res.data));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};

export const setPalettes = (payload) => {
  return {
    type: SET_PALLETS,
    payload,
  };
};
