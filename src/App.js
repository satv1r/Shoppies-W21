import React, { useState } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [nominations, setNominations] = useState([]);

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
    );
    const body = await res.json();
    setMovies(body.results);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetchMovies();
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const addNomination = (movie) => {
    let newNominations = nominations;
    newNominations.push(movie);
    setNominations(newNominations);
  };

  const removeNomination = (movie) => {
    let newNominations = nominations.filter((currentMovie) => {
      if (currentMovie === movie) {
        return false;
      }
      return true;
    });
    setNominations(newNominations);
  };

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
