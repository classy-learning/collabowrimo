import { Button, Form, TextArea } from "semantic-ui-react";

import PropTypes from "prop-types";
import React from "react";

// TODO: validate form on submission
// TODO: pass validated form data to props.onSubmit() callback
const NewClauseForm = (props) => {
  return (
    <Form>
      <Form.Field>
        <TextArea placeholder="Add your own version..." />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

NewClauseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewClauseForm;
