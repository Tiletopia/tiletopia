import React, { Component } from "react";
import tree from "../../GameImages/tree.jpeg";

class LoggingCamp extends Component {
  render() {
    let CampsOwned = 0;

    function CampFunction() {
      // number of Homesteads owned x value of homestead
    }

    return (
      <div className="tile">
        <h1># of Camps Owned:{CampsOwned}</h1>
        <h1>{this.props.children}</h1>
        <img src={tree} height="45px"></img>
      </div>
    );
  }
}

export default LoggingCamp;
