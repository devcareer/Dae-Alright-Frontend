import React from './node_modules/react';

import './button.styles.scss';
import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome';


 
const Button = ({btnDetails, color, icons}) => {
  
    return(
      <button className='button' style={{
        backgroundColor:color,
        padding: '3px'}}>
        { icons } 
        &nbsp; &nbsp;
        { btnDetails }
        </button>
    )
};

export default Button;