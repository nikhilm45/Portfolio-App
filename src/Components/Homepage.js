import React, { Component } from "react";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="homepage"></div>
        <div className="homepage-content">
          <div class="card-container">
            <LeftPanel/>
            <RightPanel/>
          </div>
        </div>
      </div>
    );
  }
}
