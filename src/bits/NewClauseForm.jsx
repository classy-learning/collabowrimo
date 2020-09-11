import { Button, Form, Label, TextArea } from "semantic-ui-react";
import React, { useState } from "react";

import { API } from "aws-amplify";
import PropTypes from "prop-types";
import { createClause } from "graphql/mutations";

// TODO: add character limit to textarea; display current chars
// TODO: fix obsolete react textarea code
const NewClauseForm = (props) => {
  const [text, setText] = useState("");
  const [activeColor, setActiveColor] = useState("white");

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await API.graphql({
          query: createClause,
          variables: {
            input: { color: activeColor, parentId: props.parentId, text: text },
          },
        });
        props.onClauseCreated(result.data.createClause);
        setText("");
      }}
    >
      <Form.Field>
        <TextArea
          onChange={(e) => setText(e.target.value)}
          placeholder="Add your own version..."
          value={text}
        />
      </Form.Field>
      <Form.Field>
        <Label.Group circular size="mini">
          {[
            "red",
            "orange",
            "yellow",
            "olive",
            "green",
            "teal",
            "blue",
            "violet",
            "purple",
            "pink",
            "brown",
            "grey",
            "black",
            "white",
          ].map((color) => (
            <Label
              basic={color !== activeColor}
              as={Button}
              color={color}
              onClick={(e) => {
                e.preventDefault();
                setActiveColor(color);
              }}
            ></Label>
          ))}
        </Label.Group>
      </Form.Field>
      <Button disabled={!text} secondary type="submit">
        Submit
      </Button>
    </Form>
  );
};

NewClauseForm.propTypes = {
  onClauseCreated: PropTypes.func.isRequired,
  parentId: PropTypes.string.isRequired,
};

export default NewClauseForm;
