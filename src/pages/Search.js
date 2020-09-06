import React from "react";
import Results from "../components/Results";
import { Link } from "react-router-dom";

const Search = ({
  onSubmit,
  onChange,
  input,
  movies,
  addNomination,
  removeNomination,
  nominations,
}) => {
  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
  };

  let link = "127.0.0.1:3000/view/";

  nominations.forEach((movie) => {
    link = link.concat(`${movie.imdbID}&`);
  });

  return (
    <div className="container searchPage">
      <form className="searchForm" onSubmit={onSubmit}>
        <label htmlFor="search">Search for movies to nominate</label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Toy Story 4"
          onChange={onChange}
          value={input}
          required
        />
        <button>Search</button>
      </form>
      <div className="presentation">
        <Results
          query={input}
          movies={movies}
          addNomination={addNomination}
          nominations={nominations}
        />
        <div className="nominations">
          <h2>Nominations</h2>
          <ul>
            {nominations.map((movie) => {
              return (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
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
          <button
            onClick={() => {
              copyToClipboard(link);
            }}
          >
            Generate Shareable Link!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
