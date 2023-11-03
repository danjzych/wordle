import React, { useState, useEffect, useContext } from "react";
import playingContext from "../../contexts/playingContext";
import Header from "../Common/Header";
import Alerts from "../Alerts/Alerts";
import Gameboard from "./Gameboard";
import Keyboard from "./Keyboard";
import Help from "../Help/Help";
import StatisticsCalculator from "../Statistics/StatisticsCalculator";
import Footer from "../Common/Footer";
import { CSSTransition, Transition } from "react-transition-group";

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
    if (wordle.isWon !== null && !isPlaying) {
      timer = setTimeout(() => {
        toggleModal("statistics");
      }, 850);
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
      <div className="flex-center">
        <Gameboard gameboard={wordle.gameboard} />
      </div>
      <Keyboard />
      <CSSTransition
        in={modalState.help}
        timeout={1000}
        classNames="Help"
        unmountOnExit
      >
        <div>
          <Help toggleModal={toggleModal} />
        </div>
      </CSSTransition>
      <CSSTransition
        in={modalState.statistics}
        timeout={1000}
        classNames="Statistics"
        unmountOnExit
      >
        <div>
          <StatisticsCalculator record={record} toggleModal={toggleModal} />
        </div>
      </CSSTransition>
      <Footer />
    </>
  );
}

export default WordleApp;
