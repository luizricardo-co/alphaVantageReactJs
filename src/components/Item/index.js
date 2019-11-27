import React from "react";
import PropTypes from "prop-types";

import { Container, Content, Text } from "./styled";

function Item({ image, title, overview, ratings }) {
  return (
    <Container>
      <Content>
        <Text weight="bolder" relative>
          Symbol: {title}
        </Text>
        <Text color="#BFC0CE">{overview}</Text>
      </Content>
    </Container>
  );
}

Item.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  ratings: PropTypes.string
};

Item.defaultProps = {
  image: "",
  title: "",
  overview: "",
  ratings: ""
};

export default Item;
