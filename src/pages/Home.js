import React from "react";
import MovieGallery from "../components/MovieGallery";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content container">
      <div className="left">
        <h1>Celebrate Cinema</h1>
        <p>Nominate your favourite movies for The Shoppies.</p>
        <Link to="/search" className="navToSearch">
          Get Started
        </Link>
      </div>
      <div className="right">
        <MovieGallery />
      </div>
    </div>
  );
};

export default Home;
