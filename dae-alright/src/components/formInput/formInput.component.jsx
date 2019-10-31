import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './formInput.styles.scss';

const FormInput = ({placeholder, type}) => {
    return(
    <input className='inputs px-4'
    type={type} 
    placeholder={placeholder}
    
    />
    )
};

export default FormInput;