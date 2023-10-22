import React from "react";
import "./Cell.css";

function Cell({ letter }) {
  return (
    <td
      className={`Cell ${
        letter.status === undefined ? "empty" : letter.status
      }`}
    >
      {letter.letter}
    </td>
  );
}

export default Cell;
