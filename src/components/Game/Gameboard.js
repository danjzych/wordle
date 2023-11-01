import React from "react";
import Row from "./Row";

import "./Gameboard.css";

function Gameboard({ gameboard }) {
  return (
    <table className="Gameboard">
      <tbody>
        {gameboard.map((row, idx) => (
          <Row row={row} key={idx} />
        ))}
      </tbody>
    </table>
  );
}

export default Gameboard;
