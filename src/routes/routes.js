import React from "react";
import { Redirect, Route } from "react-router-dom";
import { checkIfLoggedIn } from "../services/checkIfLoggedIn";
import App from "../App";
import Login from "../views/pages/login/Login";
import Register from "../views/pages/register/Register";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function Routes() {
  const isLoggedIn = checkIfLoggedIn();

  return (
    <Provider store={store}>
      <div className="container mt-5">
        <Route path="/" exact>
          {isLoggedIn ? <App /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
      </div>
    </Provider>
  );
}
