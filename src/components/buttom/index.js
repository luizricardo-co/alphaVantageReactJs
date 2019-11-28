import React from "react";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button } from "./styled";
import { onSearchByIntraday } from "../../actions/companies";

function SearchButton({ handler, value }) {
  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(onSearchByIntraday(value));
  };

  return <Button onClick={() => onSearch()}>Time Series Intraday</Button>;
}

SearchButton.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string
};

SearchButton.defaultProps = {
  handler: () => {},
  value: ""
};

export default SearchButton;
