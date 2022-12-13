import React, { Component } from "react";

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
        <img src="https://via.placeholder.com/50"></img>
      </div>
    );
  }
}

export default Tannery;
