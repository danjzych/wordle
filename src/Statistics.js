import { Link } from "react-router-dom";
import StatisticsCard from "./StatisticsCard";
import GuessDistributionChart from "./BarChart";
import "./Statistics.css";

function Statistics({ gamesPlayed, winPercentage, guessDistribution }) {
  return (
    <div className="Statistics">
      <div className="Statistics-inner">
        <div className="Statistics-item">
          <h4>STATISTICS</h4>
          <div className="Statistics-card-container">
            <StatisticsCard name={"Played"} value={gamesPlayed} />
            <StatisticsCard name={"Win %"} value={winPercentage} />
            <StatisticsCard name={"Current Streak"} value={gamesPlayed} />
            <StatisticsCard name={"Max Streak"} value={gamesPlayed} />
          </div>
        </div>
        <div className="Statistics-item">
          <h4>GUESS DISTRIBUTION</h4>
          <GuessDistributionChart guessDistribution={guessDistribution} />
        </div>
      </div>
      <Link to="/" className="Statistics-exit">
        <small>Back to puzzle</small>
        <small>X</small>
      </Link>
    </div>
  );
}

export default Statistics;
