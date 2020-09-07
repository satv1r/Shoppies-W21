import React from "react";

const Message = ({ loading, tooMany, input }) => {
  if (loading) {
    return (
      <div className="message">
        <i className="fas fa-spinner fa-spin fa-4x"></i>
      </div>
    );
  } else if (tooMany) {
    return (
      <div className="message">
        <p className="error">Please try to be more specific!</p>
      </div>
    );
  } else if (input === "") {
    return (
      <div className="message">
        <p className="error">Please enter something to search!</p>
      </div>
    );
  } else {
    return (
      <div className="message">
        <p className="error">Something went wrong, please search again</p>
      </div>
    );
  }
};

export default Message;
