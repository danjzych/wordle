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

/**
 * Hook to create instance of wordle game, and track its state.
 *
 * State:
 *  -wordle: Instance of game, encapsulates game logic
 *  -record: Gets and sets user game record
 *  -alerts: Notifications for user about the state of their game, such as
 *           errors or success
 *
 */
function useWordle() {
  const [wordle, setWordle] = useState(new Wordle());
  const [record, setRecord] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const previousRecord = JSON.parse(localStorage.getItem("wordleRecord"));

    setRecord(previousRecord?.length > 0 ? previousRecord : []);
  }, []);

  useEffect(() => {
    if (wordle.isWon !== null) {
      const newRecord = [
        ...record,
        { won: wordle.isWon, guesses: wordle.guessCount },
      ];

      setRecord(newRecord);
      localStorage.setItem("wordleRecord", JSON.stringify(newRecord));

      if (wordle.isWon) {
        addAlert("Great!");
      }

      if (wordle.isWon === false) {
        addAlert(wordle.word);
      }
    }
  }, [wordle.isWon]);

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
      addAlert(err.message);
    }
  }

  function addAlert(message) {
    setAlerts((a) => [...a, { message }]);
  }

  return { wordle, record, alerts, handleKeydown, handleGuess, addAlert };
}

export default useWordle;
