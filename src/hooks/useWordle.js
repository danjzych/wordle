import { useState, useEffect } from "react";
import Wordle from "../services/wordle";

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

function useWordle() {
  const [wordle, setWordle] = useState(new Wordle());
  const [record, setRecord] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const previousRecord = JSON.parse(localStorage.getItem("record"));

    setRecord(previousRecord?.length > 0 ? previousRecord : []);
  }, []);

  useEffect(() => {
    const previousRecord = JSON.parse(localStorage.getItem("record"));

    setRecord(previousRecord?.length > 0 ? previousRecord : []);
  }, []);

  function handleKeydown(evt) {
    if (wordle.isWon !== null) return;

    //find current index for next letter guess
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
      addAlert("error", err.message);
    }
  }

  function addAlert(type, message) {
    setAlerts((a) => [...a, { type, message }]);
  }

  return { wordle, record, alerts, handleKeydown, handleGuess, addAlert };
}

export default useWordle;
