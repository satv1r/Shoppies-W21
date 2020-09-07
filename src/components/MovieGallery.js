import React from "react";
import Movie1 from "../assets/movie1.jpg";
import Movie2 from "../assets/movie2.jpg";
import Movie3 from "../assets/movie3.jpg";
import Movie4 from "../assets/movie4.jpg";

const MovieGallery = () => {
  return (
    <div className="gallery">
      <div className="poster poster-1">
        <img src={Movie1} alt="" />
      </div>
      <div className="poster poster-2">
        <img src={Movie2} alt="" />
      </div>
      <div className="poster poster-3">
        <img src={Movie3} alt="" />
      </div>
      <div className="poster poster-4">
        <img src={Movie4} alt="" />
      </div>
    </div>
  );
};

export default MovieGallery;
