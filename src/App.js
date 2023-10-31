import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import RoutesList from "./RoutesList";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesList />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
