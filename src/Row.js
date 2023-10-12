import React from "react";
import Cell from "./Cell";

function Row({ row }) {
  return (
    <tr>
      {row.map((letter, idx) => (
        <Cell letter={letter} key={idx} />
      ))}
    </tr>
  );
}

export default Row;
