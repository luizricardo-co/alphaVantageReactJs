import {
  SEARCH_INTRADAY_SUCCESS,
  SEARCH_INTRADAY_ERROR
} from "../actions/types";

const INITIAL_STATE = {
  data: undefined,
  hasError: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_INTRADAY_SUCCESS:
      return {
        ...state,
        data: action.data,
        hasError: false
      };
    case SEARCH_INTRADAY_ERROR:
      return {
        ...state,
        hasError: true
      };
    default:
      return state;
  }
}
