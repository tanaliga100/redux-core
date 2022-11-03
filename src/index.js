import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import "./index2.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/index";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
