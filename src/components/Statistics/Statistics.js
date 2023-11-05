import StatisticsCard from "./StatisticsCard";
import GuessDistributionChart from "./BarChart";
import "./Statistics.css";

function Statistics({
  gamesPlayed,
  winPercentage,
  currentStreak,
  maxStreak,
  guessDistribution,
  toggleModal,
}) {
  function handleClick() {
    toggleModal("statistics");
  }

  return (
    <div className="Statistics flex-center">
      <div className="Statistics-inner">
        <div className="Statistics-item">
          <h4>STATISTICS</h4>
          <div className="Statistics-card-container">
            <StatisticsCard name={"Played"} value={gamesPlayed} />
            <StatisticsCard name={"Win %"} value={winPercentage} />
            <StatisticsCard name={"Current Streak"} value={currentStreak} />
            <StatisticsCard name={"Max Streak"} value={maxStreak} />
          </div>
        </div>
        <div className="Statistics-item">
          <h4>GUESS DISTRIBUTION</h4>
          <GuessDistributionChart guessDistribution={guessDistribution} />
        </div>
      </div>
      <div className="Statistics-x" onClick={handleClick}>
        <small>Back to puzzle</small>
        <small>X</small>
      </div>
    </div>
  );
}

export default Statistics;
