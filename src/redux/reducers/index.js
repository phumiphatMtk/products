import counterReducer from "./counter";
import viewReducer from "./view";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  view: viewReducer
});

export default allReducers;
