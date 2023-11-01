import { Routes, Route, Navigate } from "react-router-dom";
import StatisticsCalculator from "../Statistics/StatisticsCalculator";
import WordleApp from "../Game/WordleApp";
import Help from "../Help/Help";

function RoutesList({ wordle, record, alerts, handleKeydown }) {
  return (
    <Routes>
      <Route path="/help" element={<Help />} />
      <Route
        path="/statistics"
        element={<StatisticsCalculator record={record} />}
      />
      <Route
        path="/settings"
        element={
          <WordleApp
            wordle={wordle}
            record={record}
            alerts={alerts}
            handleKeydown={handleKeydown}
          />
        }
      />
      <Route
        path="/"
        element={
          <WordleApp
            wordle={wordle}
            record={record}
            alerts={alerts}
            handleKeydown={handleKeydown}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
