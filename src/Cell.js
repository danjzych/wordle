import React from "react";
import "./Cell.css";

function Cell({ letter }) {
  return <td className="Cell">{letter.toUpperCase()}</td>;
}

export default Cell;
