import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input 
        aria-label="Search box"
        onChange={searchChange}
        type="search" 
        placeholder="search robots"
        className="pa2 ba b--green bg-lightest-blue"
      />
    </div>
  )
}

export default SearchBox