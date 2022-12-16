import classes from "./Tile.css";
import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tile(props) {
  let [ItemsOwned, setItemsOwned] = useState(0);

  function AddItem() {
    setItemsOwned(ItemsOwned++);
    console.log("ItemsOwned", ItemsOwned);
    // alert("You bought 1 Item!");
    // TODO: should eventually save into db so you dont have to restart every time
  }

  if (props.eraTile) {
    return (
      <div className="era">
        <h1> {props.tileName} </h1>
        <FontAwesomeIcon className="icon" icon={props.icon} />
      </div>
    );
  } else if (props.locked) {
    return (
      <div className="tile locked">
        <h1> {props.tileName} </h1>
        <FontAwesomeIcon className="icon" icon={props.icon} />
        <h1> complete Pioneers to Unlock</h1>
      </div>
    );
  } else {
    return (
      <div className="tile">
        <h1>
          {" "}
          {props.tileName}s Owned : {ItemsOwned}
        </h1>
        <FontAwesomeIcon className="icon" icon={props.icon} />
        <button onClick={AddItem}>
          Buy 1 {props.tileName} for {props.ItemCost} coins
        </button>
      </div>
    );
  }
}
