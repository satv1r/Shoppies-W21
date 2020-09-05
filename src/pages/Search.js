import React from "react";
import Results from "../components/Results";

const Search = ({
  onSubmit,
  onChange,
  input,
  movies,
  addNomination,
  removeNomination,
  nominations,
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
      <div className="presentation">
        <Results query={input} movies={movies} addNomination={addNomination} />
        <div className="nominations">
          <h2>Nominations</h2>
          <ul>
            {nominations.map((movie) => {
              return (
                <li key={movie.id}>
                  <h3>{movie.title}</h3>
                  <button
                    onClick={() => {
                      removeNomination(movie);
                    }}
                  >
                    Remove Nomination
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
