import React from 'react';

import './btn.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


 
const btn = ({btnDetails, color, icons}) => {
  
    return(
      <button className='btn' style={{
        backgroundColor:color,
        padding: '3px'}}>
        { icons } 
        &nbsp; &nbsp;
        { btnDetails }
        </button>
    )
};

export default btn;