import { Dimmer, Segment } from "semantic-ui-react";

import Filter from "bad-words";
import PropTypes from "prop-types";
import React from "react";

const filter = new Filter();

// TODO: fix "catch" when swiping that appears to be caused by Dimmer
// TODO: add "eye" button to reveal profane clause
const Clause = (props) => {
  const isTextProfane = () => filter.isProfane(props.text);
  return (
    <Dimmer.Dimmable as={Segment} raised blurring dimmed={isTextProfane()}>
      <Dimmer active={isTextProfane()} inverted></Dimmer>
      <p>{props.text}</p>
    </Dimmer.Dimmable>
  );
};

Clause.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Clause;
