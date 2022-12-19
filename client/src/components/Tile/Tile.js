import classes from "./Tile.css";
import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tile(props) {

  let [ItemsOwned, setItemsOwned] = useState(0);

  function AddItem() {
    if(props.ItemCost <= props.totalCurrency){
      setItemsOwned(++ItemsOwned);
      props.decrementCurrency(props.ItemCost)
      console.log(props.tileName, "ItemsOwned", ItemsOwned);
    } else {
      console.log("not enough money!")
    }

    // TODO: should eventually save into db so you dont have to restart every time
  }
 
  function collectEarnings () {
    if ( ItemsOwned >= 1 && !props.eraTile){
      
      var earnings = Number(props.baseEarnings) * ItemsOwned
      console.log("collecting ", earnings ,"for ",props.tileName , "in tile.js")
      props.incrementCurrency( earnings )
    }

  }

  if (ItemsOwned >= 1 && !props.eraTile){ 
      var EarningsInterval = setInterval( () => {collectEarnings()} , props.collectAfterSeconds * 1000); // multiply for milliseconds
  }


  useEffect(() => {
    if (!props.eraTile){
      
      console.log(ItemsOwned, 'ItemsOwned Has changed')
      clearInterval(EarningsInterval);
      
      EarningsInterval = setInterval(  () => {collectEarnings()} , props.collectAfterSeconds * 1000);
    }
  },[ItemsOwned]) // <-- here put the parameter to listen
 

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
