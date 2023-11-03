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

  /** Get Record from local storage on page load */
  useEffect(() => {
    const previousRecord = JSON.parse(localStorage.getItem("wordleRecord"));

    setRecord(previousRecord?.length > 0 ? previousRecord : []);
  }, []);

  /** Call handleGameEnd once at end of game */
  useEffect(() => {
    if (wordle.isWon !== null) {
      handleGameEnd();
    }
  }, [wordle.isWon]);

  /** Clear alerts every 1.5 seconds */
  // useEffect(() => {
  //   let timer;
  //   if (alerts.message !== "Great!") {
  //     setTimeout(() => {
  //       setAlerts([]);
  //     }, 1500);
  //   }

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [alerts]);

  /** Adds new record to local storage for stats and gives alert for win or lose */
  function handleGameEnd() {
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

  /** Function to add letters for keyboard event listener */
  function handleKeydown(evt) {
    const keyInput = evt.key.toUpperCase();

    addLetterGuessToBoard(keyInput);
  }

  /**
   * Handles letter logic for Wordle game. Backspaces are used to remove most
   * recent guess from row representing current guess in game matrix, Enter
   * invokes function to score word. Otherwise, listens for valid characters
   * and uses them to form guess.
   */
  function addLetterGuessToBoard(letter) {
    if (wordle.isWon !== null) return;

    //find current index for next letter guess
    const guessIndex = wordle.gameboard[wordle.guessCount].findIndex(
      (e) => Object.keys(e).length === 0
    );

    if (letter === "ENTER") {
      return handleGuess();
    }

    if (letter === "BACKSPACE") {
      const newWordle = { ...wordle };
      newWordle.gameboard[wordle.guessCount][
        guessIndex === -1 ? 4 : guessIndex - 1
      ] = {};
      setWordle(newWordle);
      return;
    }

    //if current guess is 5 letters, or key is invalid, do nothing
    if (guessIndex === -1 || !VALID_KEYS.includes(letter)) {
      return;
    }

    const newWordle = { ...wordle };
    newWordle.gameboard[wordle.guessCount][guessIndex] = {
      letter: letter,
      status: "pending",
    };
    setWordle(newWordle);
  }

  //Guesses word and updates state
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

  /**
   * Adds alert to alert state for render.
   * @param {string} message
   */
  function addAlert(message) {
    setAlerts((a) => [...a, { message }]);
  }

  return {
    wordle,
    record,
    alerts,
    handleKeydown,
    handleGuess,
    addAlert,
    addLetterGuessToBoard,
  };
}

export default useWordle;
