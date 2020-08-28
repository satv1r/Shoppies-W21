import React, { useState } from "react";

const MovieGallery = () => {
  return (
    <div className="gallery">
      <div className="poster poster-1">
        <img src="https://source.unsplash.com/400x600/" alt="" />
      </div>
      <div className="poster poster-2">
        <img src="https://source.unsplash.com/401x601/" alt="" />
      </div>
      <div className="poster poster-3">
        <img src="https://source.unsplash.com/402x602/" alt="" />
      </div>
      <div className="poster poster-4">
        <img src="https://source.unsplash.com/403x603/" alt="" />
      </div>
    </div>
  );
};

export default MovieGallery;
