import React from 'react'

import './Search-Box.styles.css'

export const SearchBox = ({ placeholder, handleSearch }) => {
    return (
        <input  
            className='search'
            type='search' 
            placeholder={placeholder} 
            onChange={handleSearch}
        />
    )
}

