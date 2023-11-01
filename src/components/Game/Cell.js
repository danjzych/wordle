import React, { useContext } from "react";
import playingContext from "../../contexts/playingContext";
import "./Cell.css";

function Cell({ letter }) {
  const { isPlaying } = useContext(playingContext);

  const classes = ["Cell"];
  classes.push(letter.status === undefined ? "empty" : letter.status);

  if (isPlaying) {
    classes.push("prevent-animation");
  }

  return <td className={classes.join(" ")}>{letter.letter}</td>;
}

export default Cell;
