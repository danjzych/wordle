import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "../Alerts/Alerts";
import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";

function WordleApp({ wordle, record, alerts, handleKeydown }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    let timer;
    if (wordle.isWon !== null) {
      timer = setTimeout(() => {
        navigate("/statistics");
      }, 1750);
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
