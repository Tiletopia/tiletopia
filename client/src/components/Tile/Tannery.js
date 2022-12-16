import React, { Component } from "react";
import cow from "../../GameImages/cow.png";

class Tannery extends Component {
  render() {
    let TannerysOwned = 0;

    function HomesteadFunction() {
      // number of Homesteads owned x value of homestead
    }

    return (
      <div className="tile">
        <h1># of Tannerys Owned:{TannerysOwned}</h1>
        <h1>{this.props.children}</h1>
        <img src={cow} height="45px"></img>
      </div>
    );
  }
}

export default Tannery;
