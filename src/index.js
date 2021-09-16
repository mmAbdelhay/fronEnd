import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Header from "./views/partials/Header";
import Routes from "./routes/routes";
import StoreProvider from "./resources/StoreProvider";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <Header />
      <Routes></Routes>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
