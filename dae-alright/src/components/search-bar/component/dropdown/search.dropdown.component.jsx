import React from  'react';


const SearchDropDown = ({places, text}) => (
    <select className='search-drop' >
        <option className='option' key='0' value="">{text}</option>
        {
            places.map(({id, place}) => (
                <option className='option' key={id} value="">{place}</option>
                ))
        }
    </select>
)

export default SearchDropDown;
