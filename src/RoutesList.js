import { Routes, Route, Navigate } from "react-router-dom";
import Statistics from "./Statistics";
import WordleApp from "./WordleApp";
import Help from "./Help";

function RoutesList() {
  return (
    <Routes>
      <Route path="/help" element={<Help />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/settings" element={<WordleApp />} />
      <Route path="/" element={<WordleApp />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
