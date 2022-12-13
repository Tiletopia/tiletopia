import React, { Component } from "react";
import HomesteadsOwned from "../Buy/BuyList";

class Homestead extends Component {
  render() {
    return (
      <div className="tile">
        <h1># of Homesteads Owned:{HomesteadsOwned}</h1>
        <h1>{this.props.children}</h1>
        <img src="https://via.placeholder.com/50"></img>
      </div>
    );
  }
}

export default Homestead;
