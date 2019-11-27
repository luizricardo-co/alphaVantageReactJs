import React from "react";
import { MdSearch } from "react-icons/md";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { SearchBarContainer, SearchIcon, SearchInput } from "./styled";
import { searchByCompanyName } from "../../actions/companies";

function Search({ handler, value }) {
  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(searchByCompanyName(value));
  };

  return (
    <SearchBarContainer>
      <SearchInput
        onChange={handler}
        value={value}
        placeholder="Search by company name"
      />
      <SearchIcon onClick={onSearch}>
        <MdSearch />
      </SearchIcon>
    </SearchBarContainer>
  );
}

Search.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string
};

Search.defaultProps = {
  handler: () => {},
  value: ""
};

export default Search;
