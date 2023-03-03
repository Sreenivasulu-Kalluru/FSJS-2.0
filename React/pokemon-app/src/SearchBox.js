import React from 'react';

const SearchBox = (props) => {
  return (
    <div>
      <form className="app-form">
        <input
          type="text"
          placeholder="Enter Pokemon name..."
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
        />
        {/* <button type="submit" onClick={searchPokemon}>
          Search
        </button> */}
      </form>
    </div>
  );
};

export default SearchBox;
