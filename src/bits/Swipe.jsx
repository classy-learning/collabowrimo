import React, { useEffect, useState } from "react";

import Clause from "bits/Clause";
import PropTypes from "prop-types";

const Swipe = (props) => {
  const [clauseIds, setClauseIds] = useState([]);
  useEffect(() => {
    async function fetchClauseIds(parentId) {
      // TODO: get clause ids from api using parentid
      setClauseIds([parentId]);
    }
    fetchClauseIds(props.parentId);
  }, [props.parentId]);
  // TODO: wrap clauses and newClauseForm in react-swipeable-views
  return clauseIds.map((clauseId) => (
    <Clause id={clauseId} key={clauseId}></Clause>
  ));
};

Swipe.propTypes = {
  parentId: PropTypes.string.isRequired,
};

export default Swipe;
