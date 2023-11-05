import React from "react";
import Key from "./Key";

import "./Keyboard.css";

const keyboard = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
];

function Keyboard({ wordle }) {
  return (
    <div className="Keyboard flex-center">
      <div className="Keyboard-inner">
        {keyboard.map((row, i) => (
          <div className={`Keyboard-row row-${i}`} key={i}>
            {row.map((key, i) => (
              <Key gameKey={key} key={i} wordle={wordle} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
