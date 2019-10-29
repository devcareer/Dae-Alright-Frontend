import React from 'react';

import './formInput.styles.scss';

const formInput = ({placeholder, type}) => {
    return(
    <input className='inputs'
    type={type} 
    placeholder={placeholder}
    
    />
    )
};

export default formInput;