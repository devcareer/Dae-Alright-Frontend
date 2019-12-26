import React from 'react';

const ButtonSearch = (props) => (
    <button className="search-btn" onClick={props.onClick}>{props.text}</button>
)

export default ButtonSearch;
