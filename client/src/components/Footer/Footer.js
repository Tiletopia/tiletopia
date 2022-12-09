import React, {Component} from 'react';

import classes from './Footer.css'

class Footer extends Component {
    render(){
        return(
        <div className='Footer'>
            <button>Collect</button>
            <button>Buy</button>
            <button>Upgrade</button>
        </div> 
        )
   } 
}



export default Footer;