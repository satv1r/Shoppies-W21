import React from "react";
import Results from "../components/Results";

const Search = ({
  onSubmit,
  onChange,
  input,
  movies,
  addNomination,
  removeNomination,
}) => {
  return (
    <div className="container searchPage">
      <form className="searchForm" onSubmit={onSubmit}>
        <label htmlFor="search">Search for movies to nominate</label>
        <input
          type="text"
          name="search"
          id="search"
          onChange={onChange}
          value={input}
          required
        />
        <button>Search</button>
      </form>
      <Results query={input} movies={movies} addNomination={addNomination} />
    </div>
  );
};

export default Search;
