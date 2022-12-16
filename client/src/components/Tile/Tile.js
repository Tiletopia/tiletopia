import React, { Component } from "react";
import wagon from "../../GameImages/wagon.png";
import classes from "./Tile.css";

class Tile extends Component {
  render() {
    return (
      <div className="tile">
        <h1>{this.props.children}</h1>
        <img src={wagon} height="80px"></img>
      </div>
    );
  }
}

export default Tile;
