import React, { useState } from "react";
import Card from "./Card";

const Results = ({ query, movies }) => {
  const [page, setPage] = useState(0);

  const total = movies.length;
  const moviesToRender = [];

  if (movies.length > 0) {
    for (let i = page * 4; i < page * 4 + 4; i++) {
      moviesToRender.push(movies[i]);
    }
  }
  return (
    <div className="results">
      <h2>Results for {query}</h2>
      <ul className="cards">
        {moviesToRender.map((movie) => {
          return <Card movie={movie} />;
        })}
      </ul>
    </div>
  );
};

export default Results;
