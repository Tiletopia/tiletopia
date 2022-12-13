import React, { Component } from "react";

class BuyList extends Component {
  render() {
    let HomesteadsOwned = 0;
    function AddHomestead() {
      HomesteadsOwned++;
      console.log(HomesteadsOwned);
      // TODO: should eventually save into db so you dont have to restart every time
    }
    return (
      <div>
        <ul>
          <li>
            <button onClick={AddHomestead}>Buy 1 Homestead for 50 coins</button>
            {/* TODO: needs to remove coins (the cost) from total */}
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
        </ul>
      </div>
    );
  }
}

export default BuyList;
