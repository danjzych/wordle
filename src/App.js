import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import useWordle from "./hooks/useWordle";
import Header from "./components/Common/Header";
import RoutesList from "./components/Common/RoutesList";
import Footer from "./components/Common/Footer";

import "./App.css";

function App() {
  const { wordle, record, alerts, handleKeydown } = useWordle();
  const [isPlaying, setIsPlaying] = useState(false);

  function endGame() {
    setIsPlaying(true);
  }

  return (
    <BrowserRouter>
      <Header />
      <RoutesList
        wordle={wordle}
        record={record}
        alerts={alerts}
        isPlaying={isPlaying}
        handleKeydown={handleKeydown}
        endGame={endGame}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
