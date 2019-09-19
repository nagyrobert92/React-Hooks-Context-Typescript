import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store";
import { Router, RouteComponentProps } from "@reach/router";
import HomePage from "./HomePage";
import FavPage from "./FavPage";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/"/>
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
