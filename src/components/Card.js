import React from "react";

const Card = ({ movie }) => {
  const onLoad = () => {
    const holder = document.querySelector(".imageLoading");
    holder.style.display = "none";
  };

  return (
    <li className="card" key={movie.id}>
      <h3>{movie.title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <p className="imageLoading" onLoad={onLoad}>
        Loading Image....
      </p>
    </li>
  );
};

export default Card;
