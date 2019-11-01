import React from 'react';
import './formInput.style.scss';

const FormInput = ({placeholder, type, height, width}) => {
    return(
    <input className='input px-4'
    type={type} 
    placeholder={placeholder} style={{
      height: height,
      width: width,

    }}/>
    // <FormInput type={'password'} placeholder={'password'} height={'48px'} width={'15rem'}/>
    )
    }

export default FormInput;