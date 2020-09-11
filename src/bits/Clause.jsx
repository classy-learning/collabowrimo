import { Button, Dimmer, Icon, Segment } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

import Filter from "bad-words";
import PropTypes from "prop-types";

const filter = new Filter();

const Clause = (props) => {
  const [isProfane, setIsProfane] = useState();
  const [userDidReveal, setUserDidReveal] = useState();

  useEffect(() => {
    setIsProfane(filter.isProfane(props.text));
  }, [props.text]);

  const isDimmed = isProfane && !userDidReveal;

  return (
    <Dimmer.Dimmable as={Segment} blurring dimmed={isDimmed} raised>
      <Dimmer active={isDimmed} inverted>
        <Button
          secondary
          icon
          labelPosition="left"
          onClick={() => {
            setUserDidReveal(true);
          }}
        >
          <Icon name="eye" />
          Uncensor
        </Button>
      </Dimmer>
      <p>{props.text}</p>
    </Dimmer.Dimmable>
  );
};

Clause.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Clause;
