import { SEARCH_COMPANY_SUCCESS, SEARCH_COMPANY_ERROR } from "../actions/types";

const INITIAL_STATE = {
  companies: [],
  hasError: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_COMPANY_SUCCESS:
      return {
        ...state,
        companies: action.data,
        hasError: false
      };
    case SEARCH_COMPANY_ERROR:
      return {
        ...state,
        hasError: true
      };
    default:
      return state;
  }
}
