import React from "react";
import Card from "./Card";

const Results = ({ query, movies }) => {
  return (
    <div className="results">
      <h2>Results for {query}</h2>
      <div className="cards">
        <ul>
          {movies.map((movie) => {
            return <Card movie={movie} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Results;
