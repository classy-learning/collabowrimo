import React, { useEffect, useState } from "react";

import { API } from "aws-amplify";
import Clause from "bits/Clause";
import NewClauseForm from "bits/NewClauseForm";
import PropTypes from "prop-types";
import SwipeView from "bits/SwipeView";
import SwipeableViews from "react-swipeable-views";
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
  return (
    <SwipeableViews>
      {clauses.map((clause) => (
        <SwipeView key={clause.id}>
          <Clause {...clause}></Clause>
        </SwipeView>
      ))}
      <SwipeView>
        <NewClauseForm></NewClauseForm>
      </SwipeView>
    </SwipeableViews>
  );
};

Swipe.propTypes = {
  parentId: PropTypes.string.isRequired,
};

export default Swipe;
