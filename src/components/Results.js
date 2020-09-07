import React, { useState, useEffect } from "react";
import Card from "./Card";

const Results = ({ query, movies, addNomination, nominations, loading }) => {
  // create page state to keep track of pagination
  const [page, setPage] = useState(0);

  // decrement page
  const prevPage = () => {
    setPage(page - 1);
  };

  // increment page
  const nextPage = () => {
    setPage(page + 1);
  };

  // reset page to 0 when new movies are loaded
  useEffect(() => {
    setPage(0);
  }, [movies]);

  const moviesToRender = [];

  // push current pages movies to render array
  if (movies && movies.length > 0) {
    for (let i = page * 4; i < page * 4 + 4 && i < movies.length; i++) {
      moviesToRender.push(movies[i]);
    }
  }

  return (
    <div className="results">
      <h2>
        {movies && movies.length > 0 && (
          <p>
            Results for '{query}' <em>({movies.length})</em>
          </p>
        )}
      </h2>
      {loading && <i className="fas fa-spinner fa-spin"></i>}
      {!loading && (
        <div className="cards">
          <ul>
            {moviesToRender.map((movie) => {
              return (
                <Card
                  movie={movie}
                  key={movie.imdbID}
                  addNomination={addNomination}
                  nominations={nominations}
                />
              );
            })}
          </ul>
          {movies && movies.length > 0 && (
            <div className="buttons">
              {page > 0 ? (
                <button onClick={prevPage}>Prev Page</button>
              ) : (
                <button onClick={prevPage} disabled>
                  Prev Page
                </button>
              )}

              <p>
                Showing page {page + 1} of {Math.ceil(movies.length / 4)}
              </p>
              {page < Math.ceil(movies.length / 4 - 1) ? (
                <button onClick={nextPage}>Next Page</button>
              ) : (
                <button onClick={nextPage} disabled>
                  Next Page
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Results;
