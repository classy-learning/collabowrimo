import React, { useEffect, useState } from "react";

import { API } from "aws-amplify";
import Clause from "bits/Clause";
import NewClauseForm from "bits/NewClauseForm";
import PropTypes from "prop-types";
import SwipeView from "bits/SwipeView";
import SwipeableViews from "react-swipeable-views";
import { clausesByParentId } from "graphql/queries";

// TODO: fix outdated SwipeableViews react code
// TODO: make sure this works with a mouse and keyboard
const Swipe = (props) => {
  const [clauses, setClauses] = useState([]);
  const [selectedClause, setSelectedClause] = useState();

  useEffect(() => {
    props.onSelectionChanged(selectedClause);
  }, [props, selectedClause]);

  useEffect(() => {
    async function fetchClauses(parentId) {
      const results = await API.graphql({
        query: clausesByParentId,
        variables: { parentId: parentId },
      });
      const items = results.data.clausesByParentId.items;
      setClauses(items);
      setSelectedClause(items[0]);
    }
    fetchClauses(props.parentId);
  }, [props.parentId]);

  return (
    <SwipeableViews
      onChangeIndex={(newIndex, oldIndex, meta) => {
        setSelectedClause(clauses[newIndex]);
      }}
    >
      {clauses.map((clause) => (
        <SwipeView key={clause.id}>
          <Clause {...clause}></Clause>
        </SwipeView>
      ))}
      <SwipeView>
        <NewClauseForm
          onClauseCreated={(clause) => {
            setClauses([...clauses, clause]);
            setSelectedClause(clause);
          }}
          parentId={props.parentId}
        ></NewClauseForm>
      </SwipeView>
    </SwipeableViews>
  );
};

Swipe.propTypes = {
  onSelectionChanged: PropTypes.func.isRequired,
  parentId: PropTypes.string.isRequired,
};

export default Swipe;
