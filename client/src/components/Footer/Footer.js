import React, { Component } from "react";
import BuyList from "../Buy/BuyList";

import classes from "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <BuyList></BuyList>
      </div>
    );
  }
}

export default Footer;
