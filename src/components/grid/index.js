import React from "react";
import PropTypes from "prop-types";

import GridItem from "../Item";

import GridContainer from "./styled";
function Grid(items) {
  return (
    <GridContainer>
      {items.items[0].map((item, i) => {
        const idx = i;
        return (
          <GridItem
            key={idx}
            title={item["1. symbol"]}
            overview={item.overview}
            ratings={item.vote_average}
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
