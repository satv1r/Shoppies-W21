import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import View from "./pages/View";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [nominations, setNominations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tooMany, setTooMany] = useState(false);

  // fetch movies based on input
  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&s=${input}`
      );
      const body = await res.json();
      console.log(body);
      if (body.Response === "False") {
        if (body.Error === "Too many results.") {
          setTooMany(true);
        }
      }
      setMovies(body.Search);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
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
  const saveNominations = (nominations) => {
    localStorage.setItem("nominations", JSON.stringify(nominations));
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
    saveNominations(nominations);
  }, [nominations]);

  // https://typeofnan.dev/debouncing-with-react-hooks/
  useEffect(() => {
    setTooMany(false);
    if (input !== "") {
      const request = setTimeout(() => {
        fetchMovies();
      }, 1000);
      setLoading(true);
      return () => clearTimeout(request);
    } else {
      setMovies(undefined);
      setLoading(false);
    }
  }, [input]);

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
          <Route exact path="/">
            <Home nominations={nominations} />
          </Route>
          <Route path="/search">
            <Search
              onSubmit={onSubmit}
              onChange={onChange}
              addNomination={addNomination}
              removeNomination={removeNomination}
              nominations={nominations}
              input={input}
              movies={movies}
              loading={loading}
              tooMany={tooMany}
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
