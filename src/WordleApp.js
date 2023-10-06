import React, { useState, useEffect } from "react";
import Wordle from "./services/wordle";
import Header from "./Header";
import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";
import Footer from "./Footer";

function WordleApp() {
  // const [gameboard, setGameboard] = useState(initialGameboard);
  const [wordle, setWordle] = useState(new Wordle());
  const [guess, setGuess] = useState([]);

  function handleKeydown(evt) {
    console.log(evt.key);
    if (evt.key === "Enter") {
    } else if (evt.key === "Delete") {
      setGuess((g) => g.pop());
    } else {
      setGuess((g) => [...g, evt.key.toUpperCase()]);
    }
  }

  function handleGuess(guess) {}

  window.addEventListener("keydown", handleKeydown);
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
