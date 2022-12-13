import React, { Component } from "react";
import HomesteadsOwned from "../Buy/BuyList";
import barn from "../../GameImages/barn.jpeg";

class Homestead extends Component {
  render() {
    return (
      <div className="tile">
        <h1># of Homesteads Owned:{HomesteadsOwned}</h1>
        <h1>{this.props.children}</h1>
        <img src={barn} height="45px"></img>
      </div>
    );
  }
}

export default Homestead;
