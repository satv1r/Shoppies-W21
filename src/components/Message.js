import React from "react";

const Message = ({ loading, tooMany }) => {
  if (loading) {
    return (
      <div className="resultsMessage">
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    );
  } else if (tooMany) {
    return (
      <div className="resultsMessage">
        <p className="error">Please try to be more specific!</p>
      </div>
    );
  } else {
    return (
      <div className="resultsMessage">
        <p className="error">Something went wrong, please search again</p>
      </div>
    );
  }
};

export default Message;
