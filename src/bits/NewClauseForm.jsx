import { Button, Form, TextArea } from "semantic-ui-react";
import React, { useState } from "react";

import { API } from "aws-amplify";
import PropTypes from "prop-types";
import { createClause } from "graphql/mutations";

// TODO: add character limit to textarea; display current chars
// TODO: add color "bubbles" below textarea so that users can pick a clause color
// TODO: fix obsolete react textarea code
const NewClauseForm = (props) => {
  const [text, setText] = useState("");
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await API.graphql({
          query: createClause,
          variables: { input: { parentId: props.parentId, text: text } },
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
      <Button type="submit" disabled={!text}>
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
