import React from "react";
import "./Cell.css";

const BG_COLORS = {
  correct: "green",
  incorrect: "grey",
  partial: "yellow",
  pending: "none",
};

function Cell({ letter }) {
  return (
    <td className="Cell" style={{ backgroundColor: BG_COLORS[letter.status] }}>
      {letter.letter}
    </td>
  );
}

export default Cell;
