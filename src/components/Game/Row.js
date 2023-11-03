import React from "react";
import Cell from "./Cell";

import "./Row.css";

function Row({ row, alerts }) {
  return (
    <tr
    // className={
    //   alerts.length > 0 && alerts[0].message !== "Great!" && "Row-incorrect"
    // }
    >
      {row.map((letter, idx) => (
        <Cell letter={letter} key={idx} />
      ))}
    </tr>
  );
}

export default Row;
