import React, { useState } from "react";

import AuthWrapper from "bits/AuthWrapper";
import Scroll from "bits/Scroll";
import Swipe from "bits/Swipe";

function App() {
  const [parentIds, setParentIds] = useState(["ROOT"]);

  const onSwipeSelectionChanged = (newSelection, oldSelection) => {
    const ids = [...parentIds];

    // TODO: refactor this conditional statement to be... prettier
    if (newSelection) {
      if (oldSelection === null) {
        // nothing -> clause
        ids.push(newSelection.id);
      } else if (oldSelection === undefined) {
        // form -> clause
        ids.push(newSelection.id);
      } else if (oldSelection) {
        // clause -> clause
        ids.length = ids.indexOf(oldSelection.id);
        ids.push(newSelection.id);
      } else {
        console.log("wtf");
      }
    } else if (oldSelection) {
      // clause -> form
      ids.length = ids.indexOf(oldSelection.id);
    } else if (newSelection === undefined) {
      if (oldSelection === undefined) {
        // form -> nothing
      } else if (oldSelection === null) {
        // nothing -> form
      } else {
        console.log("wtf");
      }
    } else {
      console.log("wtf");
    }

    if (
      ids.length !== parentIds.length ||
      ids[ids.length - 1] !== parentIds[parentIds.length - 1]
    ) {
      setParentIds(ids);
    }
  };

  return (
    <AuthWrapper>
      <Scroll
        subtitle="Write a new story together each month."
        title="collabo&#183;wri&#183;mo"
      >
        {parentIds.map((parentId) => (
          <Swipe
            key={parentId}
            onSelectionChanged={onSwipeSelectionChanged}
            parentId={parentId}
          ></Swipe>
        ))}
      </Scroll>
    </AuthWrapper>
  );
}

export default App;
