import React from "react";

const keyboard = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "DELETE"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "ENTER"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard() {
  return (
    <div>
      {keyboard.flat().map((k) => (
        <small>{k}</small>
      ))}
    </div>
  );
}

export default Keyboard;
