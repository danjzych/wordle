import React, { useContext } from "react";
import playingContext from "../../contexts/playingContext";
import Cell from "./Cell";

import "./Row.css";

function Row({ row, rowIdx, alerts }) {
  const { currentGuess } = useContext(playingContext);

  return (
    <tr
      className={
        alerts.length > 0 &&
        alerts[0].message !== "Great!" &&
        rowIdx === currentGuess &&
        "Row-incorrect"
      }
    >
      {row.map((letter, idx) => (
        <Cell letter={letter} key={idx} />
      ))}
    </tr>
  );
}

export default Row;
