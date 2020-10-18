import { createStore } from "redux";
import allReducers from "./reducers";
import { loadState, saveState } from "./localStore";

const persistStore = loadState();
const store = createStore(
  allReducers,
  persistStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
