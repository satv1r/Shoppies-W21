import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import View from "./pages/View";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [nominations, setNominations] = useState([]);

  // fetch movies based on input
  const fetchMovies = async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&s=${input}`
    );
    const body = await res.json();
    console.log(body);
    setMovies(body.Search);
  };

  // fetch movies based on ID
  const fetchMovieByID = async (id) => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&i=${id}`
    );
    const body = await res.json();
    return body;
  };

  // save nominations to localStorage
  const saveNominations = (item) => {
    localStorage.setItem("nominations", JSON.stringify(item));
  };

  // return nominations from localStorage
  const getNominations = () => {
    return JSON.parse(localStorage.getItem("nominations"));
  };

  // add movie to nominations
  const addNomination = (movie) => {
    setNominations(() => [...nominations, movie]);
  };

  // remove movie from nominations
  const removeNomination = (movie) => {
    setNominations(
      nominations.filter((currentMovie) => currentMovie !== movie)
    );
  };

  // fetch movies on submit
  const onSubmit = async (e) => {
    e.preventDefault();
    await fetchMovies();
  };

  // update input on change
  const onChange = (e) => {
    setInput(e.target.value);
  };

  // initial setup
  useEffect(() => {
    if (localStorage.getItem("nominations")) {
      setNominations(getNominations());
    } else {
      const empty = [];
      saveNominations(empty);
    }
  }, []);

  // save nominations on state change
  useEffect(() => {
    console.log("nominations changed");
    saveNominations(nominations);
  }, [nominations]);

  return (
    <Router>
      <header>
        <nav>
          <div className="container">
            <ul>
              <li>
                <Link to="/"> The Shoppies </Link>
              </li>
              <li>
                built and designed by <strong>satvir sandhu</strong>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search">
            <Search
              onSubmit={onSubmit}
              onChange={onChange}
              addNomination={addNomination}
              removeNomination={removeNomination}
              nominations={nominations}
              input={input}
              movies={movies}
            />
          </Route>
          <Route
            path="/view/:list"
            render={({ match }) => (
              <View match={match} fetchMovieByID={fetchMovieByID} />
            )}
          />
        </Switch>
      </header>
    </Router>
  );
}

export default App;
