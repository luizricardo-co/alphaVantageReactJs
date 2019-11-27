import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import companiesReducer from "./reducers/companiesReducer";
import chatReducer from "./reducers/chartReducer";

const rootReducer = combineReducers({
  companies: companiesReducer,
  chatReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
