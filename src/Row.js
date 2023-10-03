import React from "react";
import Cell from "./Cell";

function Row({ row }) {
  return (
    <tr>
      {row.map((l, idx) => (
        <Cell letter={l} key={idx} />
      ))}
    </tr>
  );
}

export default Row;
