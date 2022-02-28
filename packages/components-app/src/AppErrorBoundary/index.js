import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

const AppErrorBoundary = ({ children, errorMessage }) => {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => <ErrorFallback error={error} errorMessage={errorMessage} />}
    >
      {children}
    </ErrorBoundary>
  );
};

export default AppErrorBoundary;
