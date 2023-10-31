import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wordle from "./services/wordle";
import Header from "./Header";
import Alerts from "./Alerts";
import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";
import Footer from "./Footer";

const VALID_KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "ENTER",
  "BACKSPACE",
];

function WordleApp() {
  const [wordle, setWordle] = useState(new Wordle());
  const [record, setRecord] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    const previousRecord = JSON.parse(localStorage.getItem("record"));

    setRecord(previousRecord?.length > 0 ? previousRecord : []);
  }, []);

  function handleKeydown(evt) {
    const guessIndex = wordle.gameboard[wordle.guessCount].findIndex(
      (e) => Object.keys(e).length === 0
    );
    const keyInput = evt.key.toUpperCase();

    if (keyInput === "ENTER") {
      if (guessIndex === -1) {
        handleGuess();
      } else {
        return;
      }
    }

    if (keyInput === "BACKSPACE") {
      const newWordle = { ...wordle };
      newWordle.gameboard[wordle.guessCount][
        guessIndex === -1 ? 4 : guessIndex - 1
      ] = {};
      setWordle(newWordle);
      return;
    }

    if (guessIndex === -1 || !VALID_KEYS.includes(keyInput)) {
      return;
    }

    const newWordle = { ...wordle };
    newWordle.gameboard[wordle.guessCount][guessIndex] = {
      letter: keyInput,
      status: "pending",
    };
    setWordle(newWordle);
  }

  function handleGuess() {
    setAlerts([]);
    try {
      wordle.guessWord();
      const newWordle = { ...wordle };
      setWordle(newWordle);
    } catch (err) {
      setAlerts((a) => [...a, { type: "error", message: err.message }]);
    }
  }

  // if (wordle.isWon) {
  //   const newRecord = [...record, wordle.guessCount];
  //   localStorage.setItem("record", JSON.stringify(newRecord));
  //   //WHY DO THIS CREATE A RECURSIVE ERROR (maximumupdatedepthexceeded)??
  //   navigate("/statistics");
  // }

  return (
    <>
      <Header />
      <Alerts alerts={alerts} />
      <Gameboard gameboard={wordle.gameboard} />
      <Keyboard />
      <Footer />
    </>
  );
}

export default WordleApp;
