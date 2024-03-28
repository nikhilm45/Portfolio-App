import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function Homepage() {
  return (
    <div>
      <div className="homepage"></div>
      <div className="homepage-content">
        <div class="card-container">
          {<LeftPanel />}
          {<RightPanel />}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
