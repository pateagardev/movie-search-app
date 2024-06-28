// components/Search.js
import React from 'react';
import { FaBeer, FaSearch } from "react-icons/fa";

function Search({ handleInput, searchResult }) {
  return (
    <div className="search-innput mt-5">
      <input 
        type="text"
        placeholder="Seach Movies"
        className="w-100 p-2 "
        onChange={handleInput}
        onKeyPress={searchResult}
      />
      <button onClick={searchResult} className="search-button"><FaSearch /></button>
    </div>
  );
}

export default Search;
