import { createStore } from "redux";
import { combined } from "./combine-reducers";
const store = createStore(
  combined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export { store };
