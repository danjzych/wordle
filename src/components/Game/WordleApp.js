import React, { useState, useEffect, useContext } from "react";
import playingContext from "../../contexts/playingContext";
import Header from "../Common/Header";
import Alerts from "../Alerts/Alerts";
import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";
import Help from "../Help/Help";
import StatisticsCalculator from "../Statistics/StatisticsCalculator";
import { CSSTransition } from "react-transition-group";

const defaultModalState = {
  help: false,
  statistics: false,
  settings: false,
};

function WordleApp({ wordle, alerts, record, handleKeydown, endGame }) {
  const [modalState, setModalState] = useState(defaultModalState);
  const { isPlaying } = useContext(playingContext);

  /** Add keydown event listener */
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  /** When game is won or lost, cease play state and navigate to stats page */
  useEffect(() => {
    let timer;
    if (wordle.isWon !== null && isPlaying) {
      timer = setTimeout(() => {
        toggleModal("statistics");
      }, 1500);
      endGame();
    }

    return () => clearTimeout(timer);
  }, [wordle.isWon]);

  function toggleModal(modal) {
    const newModalState = { ...defaultModalState, [modal]: !modalState[modal] };
    setModalState(newModalState);
  }

  return (
    <>
      <Header toggleModal={toggleModal} />
      <Alerts alerts={alerts} />
      <div className="flex-center main-game">
        <Gameboard gameboard={wordle.gameboard} alerts={alerts} />
        <Keyboard />
      </div>
      <CSSTransition
        in={modalState.help}
        timeout={1000}
        classNames="Help Help"
        unmountOnExit
      >
        <Help toggleModal={toggleModal} />
      </CSSTransition>
      <CSSTransition
        in={modalState.statistics}
        timeout={1000}
        classNames="Statistics Statistics"
        unmountOnExit
      >
        <StatisticsCalculator record={record} toggleModal={toggleModal} />
      </CSSTransition>
    </>
  );
}

export default WordleApp;
