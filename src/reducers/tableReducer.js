import { SEARCH_TABLE_ERROR, SEARCH_TABLE_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  indexes: undefined,
  hasError: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_TABLE_SUCCESS:
      return {
        ...state,
        indexes: action.data,
        hasError: false
      };
    case SEARCH_TABLE_ERROR:
      return {
        ...state,
        hasError: true
      };
    default:
      return state;
  }
}
