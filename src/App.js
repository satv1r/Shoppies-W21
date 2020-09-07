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
  const [viewNominations, setViewNominations] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  console.log(process.env.REACT_APP_LINK);

  // fetch movies based on input
  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&s=${input}`
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
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&i=${id}`
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
    triggerAlert(`Added ${movie.Title}`);
    if (nominations.length >= 4) {
      triggerAlert("You have nominated 5 movies");
    }
  };

  // remove movie from nominations
  const removeNomination = (movie) => {
    setNominations(
      nominations.filter((currentMovie) => currentMovie !== movie)
    );
    triggerAlert(`Removed ${movie.Title}`);
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

  // toggle nominations view on mobile (search --> nominations || nominations --> search)
  const toggleViewNominations = () => {
    setViewNominations(!viewNominations);
  };

  // Trigger an alert
  const triggerAlert = (msg) => {
    setAlertMessage(msg);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
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

  // Credit to: https://typeofnan.dev/debouncing-with-react-hooks/
  // This is a debouncing implementation using setTimeout, done to throttle API calls
  useEffect(() => {
    setTooMany(false);
    setShowAlert(false);
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
    // eslint-disable-next-line
  }, [input]);

  return (
    <Router>
      <header>
        <nav>
          <div className="container">
            <button
              className="mobileSwitcher"
              onClick={toggleViewNominations}
              aria-label="switch between search and nominations pages"
            >
              {/* Switch between nominations and search icon based on view */}
              {viewNominations && <i className="fas fa-trophy"></i>}
              {!viewNominations && <i className="fas fa-search"></i>}
            </button>
            <ul>
              <li className="logo">
                <Link to="/">
                  <strong>The Shoppies</strong>
                </Link>
              </li>
              <li className="plug">
                built and designed by{" "}
                <a href="https://www.satvir.ca/">
                  <strong>satvir sandhu</strong>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          {/* Home page */}
          <Route exact path="/">
            <Home nominations={nominations} />
          </Route>
          {/* Search Page */}
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
              viewNominations={viewNominations}
              alertMessage={alertMessage}
              showAlert={showAlert}
              triggerAlert={triggerAlert}
            />
          </Route>
          {/* Shareable Link Viewer */}
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
