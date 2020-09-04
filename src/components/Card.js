import React from "react";

const Card = ({ movie }) => {
  return (
    <li className="card" key={movie.id}>
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <h3>{movie.title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea quos
          itaque aspernatur deserunt tenetur cumque optio, voluptatem voluptatum
          quo.
        </p>
      </div>
    </li>
  );
};

export default Card;
