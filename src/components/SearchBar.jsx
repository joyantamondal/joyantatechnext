import React from 'react';

const SearchBar = ({ setQuery }) => {
  return (
    <input 
      type="text" 
      placeholder="Search by name..."
      onChange={(e) => setQuery(e.target.value)} 
    />
  );
};

export default SearchBar;
