import React from "react";
import MovieGallery from "../components/MovieGallery";
import { Link } from "react-router-dom";

const Home = ({ nominations }) => {
  return (
    <div className="content container">
      <div className="left">
        <h1 className="heading">Celebrate Cinema</h1>
        <p className="subHeading">
          Nominate your favourite movies for The Shoppies.
        </p>
        {nominations.length === 0 && (
          <Link to="/search" className="navToSearch">
            Get Started
          </Link>
        )}
        {nominations.length > 0 && (
          <Link to="/search" className="navToSearch">
            Continue
          </Link>
        )}
      </div>
      <div className="right">
        <MovieGallery />
      </div>
    </div>
  );
};

export default Home;
