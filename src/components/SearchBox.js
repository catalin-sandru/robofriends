import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input 
        onChange={searchChange}
        type="search" 
        placeholder="search robots"
        className="pa2 ba b--green bg-lightest-blue"
      />
    </div>
  )
}

export default SearchBox