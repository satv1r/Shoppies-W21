import React, { useState, useEffect } from "react";
import Placeholder from "../assets/imgNot.jpg";

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
  }, [nominations, movie]);

  let poster;
  if (movie.Poster === "N/A") {
    poster = Placeholder;
  } else {
    poster = movie.Poster;
  }
  return (
    <li className="card">
      <div className="image">
        <img src={poster} alt={movie.Title} />
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
