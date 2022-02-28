import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

const history = createMemoryHistory();

ReactDOM.render(<App history={history} />, document.querySelector("#root"));
