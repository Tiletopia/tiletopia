import React, { Component, useState } from "react";
import cow from "../../GameImages/cow.png";

export default function Tannery() {
  let [TannerysOwned, setTannerysOwned] = useState(0);

  function AddTannery() {
    setTannerysOwned(TannerysOwned++);
    console.log(TannerysOwned);
    // TODO: should eventually save into db so you dont have to restart every time
  }

  return (
    <div className="tile">
      <h1># of Tannerys Owned:{TannerysOwned}</h1>
      {/* <h1>{this.props.children}</h1> */}
      <button onClick={AddTannery}>Buy 1 Tannery for 100 coins</button>
      <img src={cow} height="45px"></img>
    </div>
  );
}
