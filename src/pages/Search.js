import React from "react";
import Results from "../components/Results";
import Message from "../components/Message";

const Search = ({
  onSubmit,
  onChange,
  input,
  movies,
  addNomination,
  removeNomination,
  nominations,
  loading,
  tooMany,
  viewNominations,
  alertMessage,
  showAlert,
  triggerAlert,
}) => {
  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    triggerAlert("Copied Link to Clipboard!");
  };

  let link = JSON.stringify(process.env.REACT_APP_LINK);
  console.log(process.env.REACT_APP_LINK);

  nominations.forEach((movie) => {
    link = link.concat(`${movie.imdbID}&`);
  });

  if (!viewNominations) {
    return (
      <div className="container searchPage">
        <form className="searchForm" onSubmit={onSubmit}>
          <label htmlFor="search">
            <h1>Search for movies to nominate</h1>
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Toy Story 4"
            onChange={onChange}
            value={input}
            required
          />
        </form>
        {showAlert && (
          <div className="alert">
            <p>{alertMessage}</p>
          </div>
        )}
        <div className="presentation">
          {(loading || movies === undefined) && (
            <Message loading={loading} tooMany={tooMany} input={input} />
          )}
          {!loading && movies !== undefined && (
            <Results
              query={input}
              movies={movies}
              addNomination={addNomination}
              nominations={nominations}
              loading={loading}
            />
          )}

          <div className="nominations">
            <h2>Nominations</h2>
            <ul>
              {nominations.map((movie) => {
                return (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <button
                      className="danger"
                      onClick={() => {
                        removeNomination(movie);
                      }}
                    >
                      Remove Nomination
                    </button>
                  </li>
                );
              })}
            </ul>
            {nominations.length > 0 && (
              <button
                className="action"
                onClick={() => {
                  copyToClipboard(link);
                }}
              >
                Generate Shareable Link!
              </button>
            )}
            {nominations.length <= 0 && (
              <p className="error">Please nominate up to 5 movies!</p>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container searchPage">
        <div className="nominations mobile">
          <h2>Nominations</h2>
          {showAlert && (
            <div className="alert">
              <p>{alertMessage}</p>
            </div>
          )}
          <ul>
            {nominations.map((movie) => {
              return (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <button
                    className="danger"
                    onClick={() => {
                      removeNomination(movie);
                    }}
                  >
                    Remove Nomination
                  </button>
                </li>
              );
            })}
          </ul>
          {nominations.length > 0 && (
            <button
              className="action"
              onClick={() => {
                copyToClipboard(link);
              }}
            >
              Generate Shareable Link!
            </button>
          )}
          {nominations.length <= 0 && (
            <p className="error">Please nominate up to 5 movies!</p>
          )}
        </div>
      </div>
    );
  }
};

export default Search;
