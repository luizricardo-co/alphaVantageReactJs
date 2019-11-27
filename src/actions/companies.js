import { Get } from "../api";
import { SEARCH_COMPANY_SUCCESS, SEARCH_COMPANY_ERROR } from "./types";
import Constants from "../utils/Constants";

export const onSearchSuccess = data => {
  return {
    type: SEARCH_COMPANY_SUCCESS,
    data: data.bestMatches
  };
};

export const onSearchError = () => {
  return {
    type: SEARCH_COMPANY_ERROR
  };
};

export const searchByCompanyName = data => {
  return Get(
    `${Constants.REQUEST_URL}?function=SYMBOL_SEARCH&keywords=${data}&outputsize=full&apikey=${Constants.API_KEY}`,
    {},
    onSearchSuccess,
    onSearchError
  );
};

export const searchBySymbol = data => {
  return Get(
    `${Constants.REQUEST_URL}?function=TIME_SERIES_DAILY&symbol=${data}&apikey=${Constants.API_KEY}`,
    {},
    onSearchSuccess,
    onSearchError
  );
};
