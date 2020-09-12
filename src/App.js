import React, { useState } from "react";

import AuthWrapper from "bits/AuthWrapper";
import Scroll from "bits/Scroll";
import Swipe from "bits/Swipe";

function App() {
  const [parentIds, setParentIds] = useState(["ROOT"]);

  const onSwipeSelectionChanged = (newSelection, oldSelection) => {
    if (newSelection) {
      if (oldSelection === null) {
        console.log("nothing -> clause");
      } else if (oldSelection === undefined) {
        console.log("form -> clause");
      } else if (oldSelection) {
        console.log("clause -> clause");
      } else {
        console.log("wtf");
      }
    } else if (oldSelection) {
      console.log("clause -> form");
    } else {
      console.log("wtf");
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
