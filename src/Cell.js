import React from "react";
import "./Cell.css";

function Cell({ letter }) {
  return <td className={`Cell ${letter.status}`}>{letter.letter}</td>;
}

export default Cell;
