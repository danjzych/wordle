import { BrowserRouter } from "react-router-dom";
import useWordle from "./hooks/useWordle";
import Header from "./Header";
import RoutesList from "./RoutesList";
import Footer from "./Footer";

import "./App.css";

function App() {
  const { wordle, record, alerts, handleKeydown } = useWordle();

  return (
    <BrowserRouter>
      <Header />
      <RoutesList
        wordle={wordle}
        record={record}
        alerts={alerts}
        handleKeydown={handleKeydown}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
