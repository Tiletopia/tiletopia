import React, {Component} from 'react';

import classes from './Tile.css'

class Tile extends Component {
    render(){
        return(
        <div className='tile'>{this.props.children}</div> 
        )
   } 
}


export default Tile;