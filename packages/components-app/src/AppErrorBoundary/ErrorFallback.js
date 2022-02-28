import React, { Fragment } from "react";

const ErrorFallback = ({ error, errorMessage }) => {
  return (
    <div role="alert">
      {errorMessage ? (
        errorMessage
      ) : (
        <Fragment>
          <p>Something went wrong:</p>
          <pre>{error.message}</pre>
        </Fragment>
      )}
    </div>
  );
};

export default ErrorFallback;
