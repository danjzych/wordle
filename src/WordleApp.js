import React, { useState } from "react";
import { initialGameboard } from "./services/wordle";
import Header from "./Header";
import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";
import Footer from "./Footer";

function WordleApp() {
  const [gameboard, setGameboard] = useState(initialGameboard);

  return (
    <>
      <Header />
      <Gameboard gameboard={gameboard} />
      <Keyboard />
      <Footer />
    </>
  );
}

export default WordleApp;
