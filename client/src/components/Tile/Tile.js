import React, {Component} from 'react';

import classes from './Tile.css'

class Tile extends Component {
    render(){
        return(
        <div className='tile'>
            <h1>{this.props.children}</h1>
                <img src='https://via.placeholder.com/50'></img>
            </div> 
        )
   } 
}


export default Tile;