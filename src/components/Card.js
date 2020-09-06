import React, { useState, useEffect } from "react";

const Card = ({ movie, addNomination, nominations }) => {
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(false);
    nominations.forEach((nomination) => {
      if (nomination.imdbID === movie.imdbID) {
        setDisabled(true);
      }
    });
    if (nominations.length >= 5) {
      setDisabled(true);
    }
  }, [nominations]);
  return (
    <li className="card">
      <div className="image">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="info">
        <div className="text">
          <h3>{movie.Title}</h3>
          <p>
            <strong>Year: </strong>
            {movie.Year}
          </p>
        </div>
        <div className="actions">
          <button>More Info</button>
          {disabled === false && (
            <button
              onClick={() => {
                addNomination(movie);
              }}
            >
              Nominate
            </button>
          )}
          {(disabled === true || nominations.length >= 5) && (
            <button
              onClick={() => {
                addNomination(movie);
              }}
              disabled
            >
              Nominate
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
