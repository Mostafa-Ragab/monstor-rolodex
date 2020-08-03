import React from 'React';

import './search-box.styles.css';

export  const searchBox = ({placeholder,handlechange}) => {
    <input
        className='search'
        placeholder={placeholder}
        type='search'
        onchange={handlechange}
    />
};