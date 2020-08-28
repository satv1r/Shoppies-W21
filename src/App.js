import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <header>
        <nav>
          <ul>
            <li>The Shoppies</li>
            <li>
              built and designed by <strong>satvir sandhu</strong>
            </li>
          </ul>
        </nav>
        <div className="left">
          <h1>Celebrate Cinema</h1>
          <p>Nominate your favourite movies for The Shoppies.</p>
          <button>Get Started</button>
        </div>
        <div className="right">
          <div className="gallery">LOL</div>
        </div>
      </header>
    </Fragment>
  );
}

export default App;
