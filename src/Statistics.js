import { Link } from "react-router-dom";
import "./Statistics.css";

function Statistics() {
  return (
    <div className="Statistics">
      <div className="Statistics-inner">
        <div>
          <h4>STATISTICS</h4>
          <p>CONTENT TILES</p>
        </div>
        <div>
          <h4>GUESS DISTRIBUTION</h4>
          chart
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
