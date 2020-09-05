import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [nominations, setNominations] = useState([]);

  const throttle = (func, interval) => {};

  // fetch movies based on input
  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
    );
    const body = await res.json();
    setMovies(body.results);
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

  // Initial setup
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
        </Switch>
      </header>
    </Router>
  );
}

export default App;
