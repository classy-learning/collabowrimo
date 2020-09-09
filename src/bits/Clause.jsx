import PropTypes from "prop-types";
import React from "react";
import { Segment } from "semantic-ui-react";

const Clause = (props) => {
  return <p>{props.text}</p>;
};

Clause.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Clause;
