import React from "react";
import PropTypes from "prop-types";

import GridItem from "../Item";

import GridContainer from "./styled";
function Grid({ items }) {
  return (
    <GridContainer>
      {items.map((item, i) => {
        const idx = i;
        return (
          <GridItem
            key={idx}
            symbol={item["1. symbol"]}
            description={item["2. name"]}
          />
        );
      })}
    </GridContainer>
  );
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any)
};

Grid.defaultProps = {
  items: []
};

export default Grid;
