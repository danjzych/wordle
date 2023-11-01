import React, { useEffect, useContext } from "react";
import playingContext from "../../contexts/playingContext";
import { useNavigate } from "react-router-dom";
import Alerts from "../Alerts/Alerts";
import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";

function WordleApp({ wordle, alerts, handleKeydown, endGame }) {
  const navigate = useNavigate();
  const { isPlaying } = useContext(playingContext);

  /** Add keydown event listener */
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  /** When game is won or lost, cease play state and navigate to stats page */
  useEffect(() => {
    let timer;
    if (wordle.isWon !== null && !isPlaying) {
      timer = setTimeout(() => {
        navigate("/statistics");
      }, 1750);
      endGame();
    }

    return () => clearTimeout(timer);
  }, [wordle.isWon]);

  return (
    <>
      <Alerts alerts={alerts} />
      <div className="flex-center">
        <Gameboard gameboard={wordle.gameboard} />
      </div>
      <Keyboard />
    </>
  );
}

export default WordleApp;
