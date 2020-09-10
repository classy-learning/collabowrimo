import { Container, Header } from "semantic-ui-react";

import PropTypes from "prop-types";
import React from "react";

const Scroll = (props) => {
  return (
    <div>
      <Container text>
        <Header as="h1" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <Header.Content>
            {props.title}
            <Header.Subheader>{props.subtitle}</Header.Subheader>
          </Header.Content>
        </Header>
      </Container>
      {props.children}
    </div>
  );
};

Scroll.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Scroll;
