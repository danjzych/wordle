import { Routes, Route } from "react-router-dom";
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
    </Routes>
  );
}

export default RoutesList;
