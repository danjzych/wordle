import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "../Alerts/Alerts";
import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";

function WordleApp({ wordle, alerts, isPlaying, handleKeydown, endGame }) {
  const navigate = useNavigate();

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
      <Gameboard gameboard={wordle.gameboard} />
      <Keyboard />
    </>
  );
}

export default WordleApp;
