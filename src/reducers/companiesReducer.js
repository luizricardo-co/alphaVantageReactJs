import {
  SEARCH_COMPANY_SUCCESS,
  SEARCH_COMPANY_ERROR,
  SEARCH_COMPANY_RESET
} from "../actions/types";

const INITIAL_STATE = {
  companies: [],
  hasError: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_COMPANY_SUCCESS:
      return {
        ...state,
        companies: [...state.companies, action.data],
        hasError: false
      };
    case SEARCH_COMPANY_ERROR:
      return {
        ...state,
        hasError: true
      };
    case SEARCH_COMPANY_RESET:
      return {
        ...state,
        hasError: false
      };
    default:
      return state;
  }
}
