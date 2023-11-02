import React, { useEffect, useContext, useState } from "react";
import playingContext from "../../contexts/playingContext";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header";
import Alerts from "../Alerts/Alerts";
import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";
import Help from "../Help/Help";
import StatisticsCalculator from "../Statistics/StatisticsCalculator";
import Footer from "../Common/Footer";

const defaultModalState = {
  help: false,
  statistics: false,
  settings: false,
};

function WordleApp({ wordle, alerts, record, handleKeydown, endGame }) {
  const [modalState, setModalState] = useState(defaultModalState);
  const { isPlaying } = useContext(playingContext);
  const navigate = useNavigate();

  /** Add keydown event listener */
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  /** When game is won or lost, cease play state and navigate to stats page */
  useEffect(() => {
    let timer;
    if (wordle.isWon !== null && !isPlaying) {
      timer = setTimeout(() => {
        navigate("/statistics");
      }, 850);
      endGame();
    }

    return () => clearTimeout(timer);
  }, [wordle.isWon]);

  function toggleModal(modal) {
    setModalState((prev) => ({ ...prev, [modal]: !prev[modal] }));
  }

  return (
    <>
      <Header toggleModal={toggleModal} />
      <Alerts alerts={alerts} />
      <div className="flex-center">
        <Gameboard gameboard={wordle.gameboard} />
      </div>
      <Keyboard />
      {modalState.help && <Help />}
      {modalState.statistics && <StatisticsCalculator record={record} />}
      <Footer />
    </>
  );
}

export default WordleApp;
