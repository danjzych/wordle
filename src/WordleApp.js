import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alerts from "./Alerts";
import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";
import useWordle from "./hooks/useWordle";

function WordleApp() {
  const { wordle, record, alerts, handleKeydown, addAlert } = useWordle();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  // useEffect(() => {
  //   const previousRecord = JSON.parse(localStorage.getItem("record"));

  //   setRecord(previousRecord?.length > 0 ? previousRecord : []);
  // }, []);

  useEffect(() => {
    if (wordle.isWon === true) {
      const newRecord = [...record, wordle.guessCount];
      localStorage.setItem("record", JSON.stringify(newRecord));
    }

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
