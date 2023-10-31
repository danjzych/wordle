import { BrowserRouter } from "react-router-dom";
import WordleApp from "./WordleApp";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <WordleApp />
    </BrowserRouter>
  );
}

export default App;
