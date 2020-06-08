import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import paletteReducer from "./paletteReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  pallete: paletteReducer,
});
