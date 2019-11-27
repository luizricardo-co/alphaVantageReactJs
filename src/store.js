import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import companiesReducer from "./reducers/companiesReducer";

const rootReducer = combineReducers({
  companies: companiesReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
