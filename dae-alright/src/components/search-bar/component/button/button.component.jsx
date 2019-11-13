import React from 'react';
// import './button.style.scss';

const ButtonSearch = (props) => (
    <button className="search-btn" onClick={props.onClick}>{props.text}</button>
)

export default ButtonSearch;
