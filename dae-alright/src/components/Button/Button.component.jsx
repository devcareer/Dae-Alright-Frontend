import React from 'react';
import './Button.style.scss';

const Button = ({btnDetails,bgColor, color, icons, width, height, className}) => (

    <button className={`${className}`} style={{
        backgroundColor:bgColor,
        width: width,
        height: height,
        color: color,
        padding: '3px'}}>

        { icons } 
        
        { btnDetails }
     </button>
    //   <Button btnDetails={' Sign in with facebook'} className={'button-lg'} color={'steelblue'} icons={<FontAwesomeIcon icon={faFacebookSquare}  size='lg'/>} bgColor={'red'}/>

)
export default Button; 