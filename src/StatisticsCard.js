import "./StatisticsCard.css";

function StatisticsCard({ name, value }) {
  return (
    <div className="StatisticsCard">
      <h1>{String(value)}</h1>
      <small>{name}</small>
    </div>
  );
}

export default StatisticsCard;
