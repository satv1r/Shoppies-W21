import React, { useState, useEffect } from "react";

const View = ({ match, fetchMovieByID }) => {
  const [nominations, setNominations] = useState([]);

  // Fetch nominated movies and set to state
  useEffect(() => {
    let list = match.params.list.split("&");
    list.pop();

    let requests = list.map((id) => fetchMovieByID(id));

    Promise.all(requests).then((responses) => setNominations(responses));
  }, [match, fetchMovieByID]);

  return (
    <div>
      <h1>Movies your friend nominated.</h1>
      <ul>
        {nominations.map((movie) => {
          return (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default View;
