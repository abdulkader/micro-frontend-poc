import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const devMode = process.env.NODE_ENV === "development";

const mount = (el, params = {}) => {
  ReactDOM.render(<App />, el);
};

if (devMode) {
  const docRoot = document.querySelector("#_container-dev-mode-root");
  if (docRoot) {
    mount(docRoot);
  }
}

export { mount };
