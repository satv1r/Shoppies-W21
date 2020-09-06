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
  let link = "/view/";

  nominations.forEach((movie) => {
    console.log("moving");
    link = link.concat(`${movie.imdbID}&`);
  });

  console.log(link);

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
          <Link to={link}>Shareable Link!</Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
