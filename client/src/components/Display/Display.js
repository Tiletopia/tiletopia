import React, {Component} from 'react';

import classes from './Display.css'

class Display extends Component {
    render(){
        return(
        <h1 className='Display'>{this.props.children}</h1> 
        )
   } 
}


export default Display;