import React from "react";

const Card = ({ movie, addNomination }) => {
  return (
    <li className="card" key={movie.id}>
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <div className="text">
          <h3>{movie.title}</h3>
          <p>
            <strong>Year: </strong>
            {movie.release_date.split("-")[0]}
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
