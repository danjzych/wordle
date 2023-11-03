import React from "react";
import Row from "./Row";

import "./Gameboard.css";

function Gameboard({ gameboard, alerts }) {
  return (
    <table className="Gameboard">
      <tbody>
        {gameboard.map((row, idx) => (
          <Row row={row} rowIdx={idx} key={idx} alerts={alerts} />
        ))}
      </tbody>
    </table>
  );
}

export default Gameboard;
