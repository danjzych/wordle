import { useContext } from "react";
import playingContext from "../../contexts/playingContext";
import "./Key.css";

function Key({ gameKey }) {
  const { keyColors, addLetter } = useContext(playingContext);

  const classes = gameKey === "ENTER" ? ["Key", "Key-enter"] : ["Key"];
  classes.push(
    keyColors[gameKey] === "unguessed"
      ? "Key-default-color"
      : keyColors[gameKey]
  );

  return (
    <div className={classes.join(" ")} onClick={() => addLetter(gameKey)}>
      {gameKey === "BACKSPACE" ? <i className="bi bi-backspace"></i> : gameKey}
    </div>
  );
}

export default Key;
