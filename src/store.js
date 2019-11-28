import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import companiesReducer from "./reducers/companiesReducer";
import tableReducer from "./reducers/tableReducer";
import chartReducer from "./reducers/chartReducer";

const rootReducer = combineReducers({
  companies: companiesReducer,
  tableReducer,
  chartReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
