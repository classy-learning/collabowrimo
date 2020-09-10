import { Container } from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";

const SwipeView = (props) => {
  return <Container text>{props.children}</Container>;
};

SwipeView.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SwipeView;
