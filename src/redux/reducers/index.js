import counterReducer from "./counter";
import viewReducer from "./view";
import cartReducer from "./cart";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  view: viewReducer, 
  cart: cartReducer
});

export default allReducers;
