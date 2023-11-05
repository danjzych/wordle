import { useContext } from "react";
import playingContext from "../../contexts/playingContext";
import "./Key.css";

function Key({ gameKey }) {
  const { keyColors, addLetter } = useContext(playingContext);

  return (
    <div
      className={`Key ${
        keyColors[gameKey] === "unguessed"
          ? "Key-default-color"
          : keyColors[gameKey]
      }`}
      onClick={() => addLetter(gameKey)}
    >
      {gameKey === "BACKSPACE" ? <i className="bi bi-backspace"></i> : gameKey}
    </div>
  );
}

export default Key;
