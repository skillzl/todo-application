import "./index.css";

import "modern-css-reset";

import * as React from "react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import * as ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
