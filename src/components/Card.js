import React from "react";

const Card = ({ movie, addNomination }) => {
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
          <button
            onClick={() => {
              addNomination(movie);
            }}
          >
            Nominate
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
