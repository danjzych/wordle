import React, { useState, useEffect } from "react";
import Wordle from "./services/wordle";
import Header from "./Header";
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
  const [currGuess, setGuess] = useState([]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
  }, []);

  function handleKeydown(evt) {
    const keyInput = evt.key.toUpperCase();
    if (currGuess.length === 5 || !VALID_KEYS.includes(keyInput)) return;

    if (evt.key === "Enter") {
      handleGuess(currGuess);
    } else if (keyInput === "BACKSPACE") {
      const deleteArr = currGuess.slice(0, -1);
      setGuess(deleteArr);
    } else {
      setGuess((g) => [...g, keyInput]);
    }
  }

  function handleGuess() {
    if (currGuess.length === 5) return;
  }

  return (
    <>
      <Header />
      <Gameboard gameboard={wordle.gameboard} />
      <Keyboard />
      <Footer />
    </>
  );
}

export default WordleApp;
