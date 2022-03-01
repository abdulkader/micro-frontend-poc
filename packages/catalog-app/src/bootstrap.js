import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const devMode = process.env.NODE_ENV === "development";

const mount = (el, { onNavigation, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigation) {
    history.listen(onNavigation);
  }

  ReactDOM.render(<App history={history} />, el);
  return {
    onParentNavigate(props) {
      const nextPathname = props.pathname;
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (devMode) {
  const docRoot = document.querySelector("#_catalog-dev-mode-root");
  if (docRoot) {
    mount(docRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
