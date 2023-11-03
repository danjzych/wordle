import { useState } from "react";
import playingContext from "./contexts/playingContext";
import useWordle from "./hooks/useWordle";

import "./App.css";
import WordleApp from "./components/Game/WordleApp";

function App() {
  const { wordle, record, alerts, handleKeydown } = useWordle();
  const [isPlaying, setIsPlaying] = useState(false);

  function endGame() {
    setIsPlaying(true);
  }

  return (
    <playingContext.Provider
      value={{
        isPlaying,
        currentGuess: wordle.guessCount,
        gameboard: wordle.gameboard,
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
