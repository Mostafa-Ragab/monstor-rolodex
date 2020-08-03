import React from 'React';

export  const searchBox = ({placeholder,handlechange}) => {
    <input
        className='search'
        placeholder={placeholder}
        type='search'
        onchange={handlechange}
    />
};