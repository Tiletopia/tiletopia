import React, { Component, useState } from "react";
import barn from "../../GameImages/barn.jpeg";

export default function Homestead() {
  let [HomesteadsOwned, setHomesteadsOwned] = useState(0);
  function AddHomestead() {
    setHomesteadsOwned(HomesteadsOwned++);
    console.log(HomesteadsOwned);
    // TODO: should eventually save into db so you dont have to restart every time
  }

  return (
    <div className="tile">
      <h1># of Homesteads Owned:{HomesteadsOwned}</h1>
      {/* <h1>{this.props.children}</h1> */}
      <button onClick={AddHomestead}>Buy 1 Homestead for 50 coins</button>
      <img src={barn} height="45px"></img>
    </div>
  );
}
