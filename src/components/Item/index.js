import React from "react";
import PropTypes from "prop-types";

import { Container, Content, Text } from "./styled";
import { searchBySymbol } from "../../actions/companies";
import { useDispatch } from "react-redux";

function Item({ symbol, description }) {
  const dispatch = useDispatch();
  const onSearch = symbol => {
    dispatch(searchBySymbol(symbol));
  };

  return (
    <Container onClick={() => onSearch(symbol)}>
      <Content>
        <Text weight="bolder" relative>
          Symbol: {symbol}
        </Text>
        <Text color="#BFC0CE">{description}</Text>
      </Content>
    </Container>
  );
}

Item.propTypes = {
  symbol: PropTypes.string,
  description: PropTypes.string
};

Item.defaultProps = {
  title: "",
  description: ""
};

export default Item;
