import { useState } from "react";
import playingContext from "./contexts/playingContext";
import useWordle from "./hooks/useWordle";

import "./App.css";
import WordleApp from "./components/Game/WordleApp";

function App() {
  const {
    wordle,
    record,
    alerts,
    keyColors,
    handleKeydown,
    addLetterGuessToBoard,
  } = useWordle();
  const [isPlaying, setIsPlaying] = useState(true);

  function endGame() {
    setIsPlaying(false);
  }

  return (
    <playingContext.Provider
      value={{
        isPlaying,
        currentGuess: wordle.guessCount,
        keyColors,
        addLetter: addLetterGuessToBoard,
      }}
    >
      <WordleApp
        wordle={wordle}
        record={record}
        alerts={alerts}
        handleKeydown={handleKeydown}
        endGame={endGame}
      />
    </playingContext.Provider>
  );
}

export default App;
