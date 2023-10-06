import React from "react";

import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div className="Header-Content Header-Logo">
        <h1>Wordle</h1>
      </div>
      <div className="Header-Content">
        <i className="bi bi-question-circle"></i>
        <i className="bi bi-bar-chart-fill"></i>
        <i className="bi bi-gear-fill"></i>
      </div>
    </header>
  );
}

export default Header;
