import { useContext } from "react";
import playingContext from "../../contexts/playingContext";
import "./Key.css";

function Key({ gameKey }) {
  const { gameboard, addLetter } = useContext(playingContext);

  const lettersByRecency = gameboard.flat().reverse();
  const letterStatus = lettersByRecency.findIndex(
    (e) => e.letter === gameKey && e.status !== "pending"
  );

  return (
    <div
      className={`Key ${
        letterStatus !== -1
          ? lettersByRecency[letterStatus].status
          : "Key-default-color"
      }`}
      onClick={() => addLetter(gameKey)}
    >
      {gameKey}
    </div>
  );
}

export default Key;
