import { SEARCH_CHART_ERROR, SEARCH_CHART_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  indexes: undefined,
  hasError: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_CHART_SUCCESS:
      return {
        ...state,
        indexes: action.data,
        hasError: false
      };
    case SEARCH_CHART_ERROR:
      return {
        ...state,
        hasError: true
      };
    default:
      return state;
  }
}
