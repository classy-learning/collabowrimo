import React, { useEffect, useState } from "react";

import { API } from "aws-amplify";
import Clause from "bits/Clause";
import PropTypes from "prop-types";
import { clausesByParentId } from "graphql/queries";

const Swipe = (props) => {
  const [clauses, setClauses] = useState([]);
  useEffect(() => {
    async function fetchClauses(parentId) {
      const results = await API.graphql({
        query: clausesByParentId,
        variables: { parentId: parentId },
      });
      setClauses(results.data.clausesByParentId.items);
    }
    fetchClauses(props.parentId);
  }, [props.parentId]);
  // TODO: wrap clauses and newClauseForm in react-swipeable-views
  return clauses.map((clause) => <Clause {...clause} key={clause.id}></Clause>);
};

Swipe.propTypes = {
  parentId: PropTypes.string.isRequired,
};

export default Swipe;
