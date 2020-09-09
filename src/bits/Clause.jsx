import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

const Clause = (props) => {
  const [clause, setClause] = useState();
  useEffect(() => {
    async function fetchClause(id) {
      // TODO: fetch clause from api using id
      setClause(id);
    }
    fetchClause(props.id);
  }, [props.id]);
  return <p>{clause}</p>;
};

Clause.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Clause;
