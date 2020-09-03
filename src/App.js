import React, { Fragment } from "react";
import MovieGallery from "./components/MovieGallery";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
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
            <h1>Haha, welcome to the Search page.</h1>
          </Route>
        </Switch>
      </header>
    </Router>
  );
}

export default App;
