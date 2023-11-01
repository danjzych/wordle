import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="Header-Content Header-Logo">
        <NavLink to="/">
          <h1>Wordle</h1>
        </NavLink>
      </div>
      <div className="Header-Content">
        <NavLink to="/help">
          <i className="bi bi-question-circle"></i>
        </NavLink>
        <NavLink to="/statistics">
          <i className="bi bi-bar-chart-fill"></i>
        </NavLink>
        <NavLink to="/settings">
          <i className="bi bi-gear-fill"></i>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
