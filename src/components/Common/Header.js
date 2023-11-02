import React from "react";

import "./Header.css";

function Header({ toggleModal }) {
  function handleClick(evt) {
    const modalName = evt.target.getAttribute("data-name");
    toggleModal(modalName);
  }
  return (
    <header className="Header">
      <div className="Header-Content Header-Logo">
        <h1>Wordle</h1>
      </div>
      <div className="Header-Content">
        <div>
          <i data-name="help" className="bi bi-question-circle"></i>
        </div>
        <div onClick={handleClick}>
          <i data-name="statistics" className="bi bi-bar-chart-fill"></i>
        </div>
        <div onClick={handleClick}>
          <i data-name="settings" className="bi bi-gear-fill"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
