import React from 'react';

const InputSearch = (props) => (
    <input 
        className="search-drop"
        type="search" 
        placeholder={props.placeholder} 
        onChange={props.onChange} 
        onCompositionEnd={props.onCompositionEnd}
    />
)
export default InputSearch;
