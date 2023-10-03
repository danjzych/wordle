import React from "react";
import "./Cell.css";

function Cell({ letter }) {
  return <td className="Cell">{letter}</td>;
}

export default Cell;
