import React, { useState } from "react";

import AuthWrapper from "bits/AuthWrapper";
import Scroll from "bits/Scroll";
import Swipe from "bits/Swipe";

function App() {
  const [parentIds, setParentIds] = useState(["ROOT"]);
  return (
    <AuthWrapper>
      <Scroll
        subtitle="Write a new story together each month."
        title="collabo&#183;wri&#183;mo"
      >
        {parentIds.map((parentId) => (
          <Swipe key={parentId} parentId={parentId}></Swipe>
        ))}
      </Scroll>
    </AuthWrapper>
  );
}

export default App;
