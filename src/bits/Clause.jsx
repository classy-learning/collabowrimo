import PropTypes from "prop-types";
import React from "react";
import { Segment } from "semantic-ui-react";

// TODO: add flag button
// TODO: make user agree to flagging criteria in popup and confirm flag
// TODO: add clause flag to database via api
// TODO: blur flagged posts until user clicks to confirm they want to see
const Clause = (props) => {
  return <p>{props.text}</p>;
};

Clause.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Clause;
