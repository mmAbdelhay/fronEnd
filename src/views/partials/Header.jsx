import React from "react";
import { Link } from "react-router-dom";
import { checkIfLoggedIn } from "../../services/checkIfLoggedIn";

export default function Header() {
  const isLoggedIn = checkIfLoggedIn();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">React</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/login" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
          </ul>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="nav-link text-light">
                Login
              </Link>
              <Link to="/register" className="nav-link text-light">
                Register
              </Link>
            </>
          ) : (
            <Link to="/logout" className="nav-item nav-link">
              logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
